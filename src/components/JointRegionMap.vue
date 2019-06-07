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
                        refD: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z'
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

            var leader1 = new joint.shapes.basic.Rect({
                position: { x: 520, y: 80 },
                size: { width: 20, height: 20 },
                attrs: { rect: { fill: '#333333' }, text: { text: 'L1' } }
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
