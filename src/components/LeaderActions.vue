<template>
    <VueDraggable></VueDraggable>
</template>

<script>
    import VueDraggable from "../components/VueDraggable";

    export default {
        name: "LeaderActions",
        components: {
            VueDraggable
        },
        data() {
            const componentInstance = this;

            return {
                options: {
                    // dropzoneSelector: 'ul',
                    // draggableSelector: 'li',
                    // showDropzoneAreas: true,
                    // multipleDropzonesItemsDraggingEnabled: true,
                    // onDrop(event) {
                    //   console.log(event);
                    // },
                    // onDragstart(event) {
                    //   event.stop();
                    // },
                    onDragend(event) {
                        // if you need to stop d&d
                        // event.stop();

                        // you can call component methods, just don't forget
                        // that here `this` will not reference component scope,
                        // so out from this returned data object make reference
                        // to component instance
                        componentInstance.someDummyMethod();

                        // to detect if draggable element is dropped out
                        if (!event.droptarget) {
                            console.log('event is dropped out');
                        }
                    }
                }
            }
        },
        methods: {
            someDummyMethod() {
                console.log('Hello from someDummyMethod');
            }
        }
    }
</script>

<style scoped>

</style>
