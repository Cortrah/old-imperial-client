<template>
    <div>
        <div id="graphie"
             @contextmenu.prevent="$refs.menu.open">
        </div>
        <vue-context ref="menu">
            <li>
                <a href="#" @click.prevent="onClick($event.target.innerText)">
                    Option 1
                </a>
            </li>
            <li>
                <a href="#" @click.prevent="onClick($event.target.innerText)">
                    Option 2
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
        name: 'JointMap',
        components: {VueContext},
        props: {
            msg: String,
        },
        data () {
            return {
                graph: Object,
                paper: Object,
                region1: Object,
            }
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

            regions.forEach( region => {
                console.log(region.pathData);
                let jointView = region.getJointView();
                graph.addCells([ new joint.shapes.standard.Path( jointView ) ]);
                region.locations.forEach( location => {
                    let jointView = location.getJointView();
                    graph.addCells([ new joint.shapes.standard.Image( jointView ) ])
                })
            });

            let leader1 = new joint.shapes.standard.Path({
                position: {
                    x: 780,
                    y: 180
                },
                size: {
                    width: 20, height: 20
                },
                attrs: {
                    cellType: "Leader",
                    body: {
                        refD: `M10 10 H 90 V 90 H 10 L 10 10`
                    },
                    label: {
                        text: 'L1'
                    }
                }
            });

            graph.addCells([
                leader1
            ]);

            // First, unembed the cell that has just been grabbed by the user.
            paper.on('cell:pointerdown', function(cellView, evt, x, y) {

                if (cellView.model.attributes.attrs.cellType === "Leader") {
                    let cell = cellView.model;

                    if (!cell.get('embeds') || cell.get('embeds').length === 0) {
                        // Show the dragged element above all the other cells (except when the element is a parent).
                        cell.toFront();
                    }

                    if (cell.get('parent')) {
                        graph.getCell(cell.get('parent')).unembed(cell);
                    }

                    // let link1 = new joint.shapes.standard.Link();
                    // link1.source(leader1);
                    // link1.target(location1);
                    // link1.addTo(graph);
                    //
                    // let link2 = new joint.shapes.standard.Link();
                    // link2.source(leader1);
                    // link2.target(region1);
                    // link2.addTo(graph);
                    //
                    // let link3 = new joint.shapes.standard.Link();
                    // link3.source(leader1);
                    // link3.target(region2);
                    // link3.addTo(graph);


                } else {
                    evt.data.guarded = true;
                }
            });

            // When the dragged cell is dropped over another cell, let it become a child of the element below.
            paper.on('cell:pointerup', function(cellView, evt, x, y) {

                //graph.removeLinks(this.leader1);

                let cell = cellView.model;
                let cellViewsBelow = paper.findViewsFromPoint(cell.getBBox().center());

                if (cellViewsBelow.length) {
                    // Note that the findViewsFromPoint() returns the view for the `cell` itself.
                    let cellViewBelow = _.find(cellViewsBelow, function(c) { return c.model.id !== cell.id });

                    // Prevent recursive embedding.
                    if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
                        cellViewBelow.model.embed(cell);
                    }
                }
            });

            paper.on('cell:mouseover', function(cellView, evt, x, y) {
                if (cellView.model.attributes.attrs.cellType === "Region") {
                    console.log(cellView.model.attributes.attrs.tooltip);
                }
            });
        },
        methods: {
            // rightClick: function(e) {
            //     console.log(e);
            //     console.log("x:" + e.offsetX + " , y:" + e.offsetY)
            // },
            onClick (text) {
                alert(`You clicked "${text}"!`);
            }
        }
    }

</script>
