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
