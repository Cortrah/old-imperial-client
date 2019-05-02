<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <div id="graphie" style="height: 100px; width: 600px; background-color: #ffffff"></div>
    </div>
</template>

<script>
    import joint from '../../node_modules/jointjs';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        mounted: function() {
            var graph = new joint.dia.Graph;

            var paper = new joint.dia.Paper({
                el: document.getElementById('graphie'),
                model: graph,
                width: 600,
                height: 100,
                gridSize: 1
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
        },
        methods: {
            gogo() {
            }
        }
    }

</script>

<style scoped lang="scss">
</style>
