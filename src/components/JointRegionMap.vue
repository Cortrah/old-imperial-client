<template>
    <div id="graphie" @contextmenu.prevent="rightClick($event)"></div>
</template>

<script>
    import * as _ from "lodash";
    import joint from '../../node_modules/jointjs';
    import {g as g} from "jointjs";
    import {Vectorizer as V} from 'jointjs';


    export default {
        name: 'JointMap',
        props: {
            msg: String
        },
        mounted: function() {

            var graph = new joint.dia.Graph;
            var paper = new joint.dia.Paper({
                el: document.getElementById('graphie'),
                width: 4800,
                height: 2400,
                background: {
                    color: 'rgb(157,178,194)'
                },
                gridSize: 10,
                drawGrid: true,
                model: graph,
            });

            var region1 = new joint.shapes.standard.Path({
                position: { x: 20, y: 20 },
                size: { width: 200, height: 200 },
                attrs: {
                    body: {
                        refD: `M3064.564,1994.523c-2.223-0.957-5.152-1.188-8.514-1.006c-2.068,0.262-1.832,2.835-4,3.008
                            c-8.564,1.271-17.412,2.271-27.009,2.506c-0.625-4.22,1.288-7.561,1.001-11.521c-0.166-2.282-1.688-4.341-2-6.51
                            c-0.712-4.87,1.312-9.896-1.503-14.026c-3.319-1.016-8.396-0.272-12.502-0.5c-2.251-2.092-4.312-4.364-6.002-7.015
                            c0.297-7.213,1.729-19.261-3.503-22.54c-1.104-10.127,9.449-8.568,16.004-11.021c1.502-0.337,0.758-2.913,2.003-3.505
                            c6.688-2.326,9.604-8.409,13.504-13.521c-1.043-3.071-3.335-4.201-3.001-7.021c0.425-3.559,5.824-5.348,7.503-8.017
                            c7.229-1.05,9.646,5.42,14.004,8.017c4.979,2.965,9.812,2.226,18.508,2.004c3.791,3.558,8.118,6.562,12.003,10.021
                            c4.602,0.073,9.971-0.627,12.004,2.005c1.038,5.787-4.844,7.883-6.003,13.025c-6.104,3.062-9.046,9.304-8.002,19.525
                            c1.106,3.733,6.401,3.274,8.002,6.52c-0.414,2.088-3.552,1.445-4.501,3.005c-3.081,8.934-15.312,8.704-13.004,23.043
                            c-5.507-0.229-5.213,9.178-3.503,13.021l-0.892-0.179L3064.564,1994.523z`
                    },
                    label: {
                        text: 'Region 1'
                    }
                }
            });
            var region2 = new joint.shapes.basic.Rect({
                position: { x: 220, y: 220 },
                size: { width: 200, height: 200 },
                attrs: { rect: { fill: '#cccccc' }, text: { text: 'Region 2' } }
            });
            var region3 = new joint.shapes.basic.Rect({
                position: { x: 220, y: 20 },
                size: { width: 200, height: 200 },
                attrs: { rect: { fill: '#cccccc' }, text: { text: 'Region 3' } }
            });

            var leader1 = new joint.shapes.standard.Path({
                position: {
                    x: 520,
                    y: 80
                },
                size: {
                    width: 20, height: 20
                },
                attrs: {
                    body: {
                        refD: `M10 10 H 90 V 90 H 10 L 10 10`
                    },
                    label: {
                        text: 'L1'
                    }
                }
            });

            graph.addCells([region1, region2, region3, leader1]);

            // First, unembed the cell that has just been grabbed by the user.
            paper.on('cell:pointerdown', function(cellView, evt, x, y) {

                var cell = cellView.model;

                if (!cell.get('embeds') || cell.get('embeds').length === 0) {
                    // Show the dragged element above all the other cells (except when the
                    // element is a parent).
                    cell.toFront();
                }

                if (cell.get('parent')) {
                    graph.getCell(cell.get('parent')).unembed(cell);
                }
            });

            // When the dragged cell is dropped over another cell, let it become a child of the element below.
            paper.on('cell:pointerup', function(cellView, evt, x, y) {

                var cell = cellView.model;
                var cellViewsBelow = paper.findViewsFromPoint(cell.getBBox().center());

                if (cellViewsBelow.length) {
                    // Note that the findViewsFromPoint() returns the view for the `cell` itself.
                    var cellViewBelow = _.find(cellViewsBelow, function(c) { return c.model.id !== cell.id });

                    // Prevent recursive embedding.
                    if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
                        cellViewBelow.model.embed(cell);
                    }
                }
            });
        },
        methods: {
            rightClick: function(e) {
                alert("gogo gadget")
            }
        }
    }

</script>
