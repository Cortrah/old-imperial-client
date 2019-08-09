<template>
    <div>

        <div id="toolbar">
            <el-button-group style="width:280px; float:left">
                <el-button type="primary" icon="el-icon-picture" size="mini"></el-button>
                <el-button type="primary" icon="el-icon-location" size="mini"></el-button>
                <el-button type="primary" icon="el-icon-view" size="mini"></el-button>
                <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                <el-button type="primary" icon="el-icon-view" size="mini"></el-button>
                <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            </el-button-group>
            <div class="block">
                <el-slider v-model="zoom" v-on:change="zoomChanged"
                           style="width:300px; float:right; padding-right:15px">
                </el-slider>
            </div>
        </div>

        <div id="graphie"
             :style="{ width: mapWidth + '%', height: mapHeight + '%' }"
             @contextmenu.prevent="$refs.menu.open">
        </div>

        <vue-context ref="menu">
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('mv')">
                    Movement
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('tr')">
                    Transfer
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('di')">
                    Diplomacy
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('int')">
                    Intelligence
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('cbt')">
                    Combat
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('ma')">
                    Magic
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="openLeaderActionModal('mi')">
                    Misc
                </a>
            </li>
        </vue-context>

    </div>
</template>

<script>
    import * as _ from "lodash";
    import joint from '../../node_modules/jointjs';
    import { VueContext } from 'vue-context';

    export default {
        name: 'GameMap',
        components: {VueContext},
        props: {
            msg: String,
        },
        data () {
            return {
                zoom: 40,
                graph: Object,
                paper: Object,
                currentLeader: null,
                jointRegions: [],
                jointLocations: [],
                currentLinks: [],
                links: []
            }
        },
        computed: {
            mapHeight: function () {
                return this.zoom * 10;
            },
            mapWidth: function () {
                return this.zoom * 10;
            },
        },
        mounted: function() {

            let graph = new joint.dia.Graph;
            let paper = new joint.dia.Paper({
                el: document.getElementById('graphie'),
                width: 4800,
                height: 2400,
                background: {
                    color: 'rgb(50,50,50)'
                },
                gridSize: 10,
                drawGrid: true,
                model: graph,
            });

            let regions = this.$store.state.regions;

            // first draw all the regions
            regions.forEach( region => {
                let regionJointView = new joint.shapes.standard.Path(region.getJointProps());
                this.jointRegions.push(regionJointView);
                graph.addCell(regionJointView);
            });

            // then go through them again for the locations
            regions.forEach( region => {
                region.locations.forEach( location => {
                    let locationJointView = new joint.shapes.standard.Image(location.getJointProps());
                    this.jointLocations.push(locationJointView);
                    graph.addCell(locationJointView);

                    location.leaders.forEach( leader => {
                        let leaderJointView = new joint.shapes.standard.Path(leader.getJointProps());
                        let newCell = graph.addCell(leaderJointView);
                        locationJointView.embed(leaderJointView);
                    });
                })
            });


            let scope = this;
            // First, unembed the cell that has just been grabbed by the user.
            paper.on('cell:pointerdown', function(cellView, evt, x, y) {


                if (cellView.model.attributes.attrs.cellType === "Leader") {
                     let currentLeader = cellView;
                     scope.currentLeader = currentLeader;
                     currentLeader.model.toFront();

                    // get the location
                    //let currentLocationCell = graph.getCell(currentLeader.model.get('parent'));
                    //currentLocationCell.unembed(currentLeader);

                    // let currentRegionCell = graph.getCell(currentLocation.model.get('parent'));
                    // let currentRegionId = currentRegionCell.attrs.regionId;
                    // console.log(currentRegionId);

                    // get the other locations of the current region
                    // and the county locations of the bordering regions
                    // and create links to each of them
                    // calculating the costs

                    scope.jointRegions.forEach( region => {
                        let link = new joint.shapes.standard.Link();
                        link.source(scope.currentLeader.model);
                        link.target(region);
                        link.appendLabel({
                            markup: [
                                {
                                    tagName: 'circle',
                                    selector: 'body'
                                }, {
                                    tagName: 'text',
                                    selector: 'label'
                                }
                            ],
                            attrs: {
                                label: {
                                    text: '1',
                                    fill: '#000000',
                                    fontSize: 14,
                                    textAnchor: 'middle',
                                    yAlignment: 'middle',
                                    pointerEvents: 'none'
                                },
                                body: {
                                    ref: 'label',
                                    fill: '#ffffff',
                                    stroke: '#000000',
                                    strokeWidth: 1,
                                    refR: 1,
                                    refCx: 0,
                                    refCy: 0
                                },
                            }
                        });
                        link.addTo(region.graph);
                        scope.links.push(link);
                    });
                } else if (cellView.model.attributes.attrs.cellType === "Region") {
                    console.log("is Region do not drag");
                } else if(evt.data){
                    evt.data.guarded = true;
                }
            });

            // When the dragged cell is dropped over another cell, let it become a child of the element below.
            paper.on('cell:pointerup', function(cellView, evt, x, y) {

                cellView.model.graph.removeLinks(scope.currentLeader.model);

                // let cell = cellView.model;
                // let cellViewsBelow = paper.findViewsFromPoint(cell.getBBox().center());
                //
                // if (cellViewsBelow.length) {
                //     // Note that the findViewsFromPoint() returns the view for the `cell` itself.
                //     let cellViewBelow = _.find(cellViewsBelow, function(c) { return c.model.id !== cell.id });
                //
                //     // Prevent recursive embedding.
                //     if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
                //         cellViewBelow.model.embed(cell);
                //     }
                // }
            });

            paper.on('cell:mouseover', function(cellView, evt, x, y) {
                if (cellView.model.attributes.attrs.cellType === "Region") {
                    //console.log(cellView.model.attributes.attrs.tooltip);
                }
            });
        },
        methods: {
            // rightClick: function(e) {
            //     console.log(e);
            //     console.log("x:" + e.offsetX + " , y:" + e.offsetY)
            // },
            openLeaderActionModal(msg) {
                let dataForModal = {
                    modalName: "ActionModal",
                    data: {
                        actionType: msg,
                        note: ""
                    },
                };
                this.$bus.$emit('open-modal', dataForModal);
            },

            zoomChanged: function (event) {
                if(event > 10){
                    this.zoom = event;
                } else {
                    this.zoom = 10;
                }
            },
        }
    }

</script>

<style>
    #toolbar {
        height: 30px;
        top: 60px;
        width: 100%;
        color: #999999;
        background-image: url("../assets/transparent_grey.png");
        padding: 5px;
        position: fixed;
        z-index: 600;
        -moz-box-shadow: 6px 6px 8px #666;
        -webkit-box-shadow: 6px 6px 8px #666;
        box-shadow: 6px 6px 8px #666;
        /* For IE 8 */
        -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=8, Direction=180, Color='#666666')";
        /* For IE 5.5 - 7 */
        filter: progid:DXImageTransform.Microsoft.Shadow(Strength=8, Direction=180, Color='#666666');
    }
</style>
