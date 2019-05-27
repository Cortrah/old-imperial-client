<template>
    <div id="graphie"></div>
</template>

<script>
    import joint from '../../node_modules/jointjs';

    export default {
        name: 'JointMap',
        props: {
            msg: String
        },
        mounted: function() {
            var graph = new joint.dia.Graph;

            var paper = new joint.dia.Paper({
                el: document.getElementById('graphie'),
                model: graph,
                width: 4800,
                height: 2200,
                background: {
                    color: 'rgb(157,178,194)'
                },
                gridSize: 10,
                drawGrid: true,
            });

            var rect = new joint.shapes.standard.Rectangle();
            rect.position(100, 30);
            rect.resize(100, 40);
            rect.attr({
                body: {
                    fill: 'blue'
                },
                label: {
                    text: 'Hello',
                    fill: 'white'
                }
            });
            rect.addTo(graph);

            var rect2 = rect.clone();
            rect2.translate(300, 0);
            rect2.attr('label/text', 'World!');
            rect2.addTo(graph);

            var link = new joint.shapes.standard.Link();
            link.source(rect);
            link.target(rect2);
            link.addTo(graph);

            var svgFile = [
                '<?xml version="1.0" standalone="no"?>',
                '<svg viewBox="0 0 1024 768" ' +
                'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd" xml:space="preserve" >',
                '<defs >',
                '<clipPath id="clipId0" >',
                '<path d="M0,768 1024,768 1024,0 0,0 z" />',
                '</clipPath>',
                '</defs>',
                '<g stroke-width="0.1" clip-path="url(#clipId0)" fill="none" stroke="rgb(0,0,0)" />',
                '<g stroke-width="0.25" clip-path="url(#clipId0)" fill="rgb(0,0,0)" stroke="none" >',
                '<path d="M1013.96,634.98 10.0392,634.98 1013.96,133.02 z" />',
                '</g>',
                '<g stroke-width="0.25" clip-path="url(#clipId0)" fill="none" stroke="rgb(0,0,0)" >',
                '<polyline points="10.0392,133.02 1013.96,133.02 1013.96,634.98 10.0392,634.98 10.0392,133.02 " />',
                '<polyline points="10.0392,634.98 1013.96,133.02 " />',
                '</g>',
                '</svg>'
            ].join('');


            var el1 = new joint.shapes.basic.Image({
                size: {
                    width: 100,
                    height: 100
                },
                position: {
                    x: 100,
                    y: 100
                },
                attrs: {
                    image: {
                        width: 1024,
                        height: 768,
                        'xlink:href': 'data:image/svg+xml;utf8,' + encodeURIComponent(svgFile),
                        preserveAspectRatio: 'none'
                    }
                }
            });

            var el2 = el1.clone().position(300,300).resize(200,200);

            graph.addCells([el1, el2]);


            paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
            paper.on('cell:mousewheel', this.onMousewheel, this);

            var paperScroller = this.paperScroller = new joint.ui.PaperScroller({
                paper: paper,
                autoResizePaper: true,
                cursor: 'grab'
            });

            this.$('.paper-container').append(paperScroller.el);
            paperScroller.render().center();
        },
        methods: {
            gogo() {
            }
        }
    }

</script>
