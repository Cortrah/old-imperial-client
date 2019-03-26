<template>
    <div id="thing1" class="dragable" v-bind:style="position"
         @mousedown="onMouseDown($event)"
         @mousemove="onMouseMove($event)"
         @mouseup="onMouseUp($event)">
        H1
    </div>
</template>

<script>
    export default {
        name: "ActorMarker",
        data: function() {
            return {
                x: 50,
                y: 50,
            }
        },
        computed: {
            position: function() {
                return {
                    left: this.x + 'px',
                    top: this.y + 'px'
                }
            }
        },
        methods: {
            onMouseDown(e) {
                //console.log('down');
                //console.log(e);
                //console.log(e.target);
                this.x = 90;
            },
            onMouseMove(e) {
                //console.log('move');
                //console.log(e);
                //console.log(e.target);
                //e.target.setAttribute("style", "color: red;");
                //e.target.setAttribute("style", "top: '100px'; left: '100px'");
            },
            onMouseUp(e) {
                //console.log('up');
                //console.log(e);
                //console.log(e.target);
            },
            onMouseOver(e) {
                //console.log('over');
                //console.log(e);
                //console.log(e.target);
            },
        }
    }
</script>

<style scoped>
    .dragable {
        position: absolute;
        padding: 2px;
        background-color: #e4edd4;
    }
</style>