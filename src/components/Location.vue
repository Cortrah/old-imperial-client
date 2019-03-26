<template>
    <div class="droppable" v-bind:style="styleObject"
         @mousedown="onMouseDown($event)"
         @mousemove="onMouseMove($event)"
         @mouseup="onMouseUp($event)">
        L1
    </div>
</template>

<script>
    export default {
        name: "Location",
        data: function() {
            return {
                x: 0,
                y: 0,
                styleObject: {
                    color: 'blue',
                    fontSize: '13px',
                    left: this.x + "px",
                    top: this.y + "px",
                }
            }
        },
        methods: {
            onMouseDown(e) {
                //console.log('down');
                //console.log(e);
                //console.log(e.target);
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
    .droppable {
        position: absolute;
        padding: 2px;
        background-color: #c6d3f3;
    }
</style>