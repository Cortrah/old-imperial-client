<template>
    <div v-drag-and-drop:options="options" class="leader-actions">
        <img src="../assets/avatars/chitixi.jpg"/>
        <ul class="drag-list">
            <li class="drag-column" v-for="group in groups"
                :key="group.id">

                <span class="drag-column-header">
                  <h2>
                      {{ group.name }}
                  </h2>
                </span>

                <vue-draggable-group
                        v-model="group.items"
                        :groups="groups"
                        :data-id="group.id"
                        @change="onGroupsChange">

                    <ul class="drag-inner-list" :data-id="group.id">
                        <li class="drag-item" v-for="item in group.items"
                            :key="item.id" :data-id="item.id">
                            <div class="drag-item-text">
                                {{ item.name }}
                            </div>
                        </li>
                    </ul>
                </vue-draggable-group>

            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "LeaderActions",
        components: {
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

                    dropzoneSelector: ".drag-inner-list",
                    draggableSelector: ".drag-item",

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
                },
                groups: [
                    {
                        id: 1,
                        name: "Previous Phases",
                        items: [
                            { id: 1, name: "Mv C.Sut~Tak", groupId: 1 },
                            { id: 2, name: "Dp Tak", groupId: 1 },
                            { id: 3, name: "Ex Tak", groupId: 1 }
                        ]
                    },
                    {
                        id: 2,
                        name: "Phase 10",
                        items: [
                            { id: 4, name: "Mv Tak:Chak", groupId: 2 },
                        ]
                    },
                    {
                        id: 3,
                        name: "Next Phases",
                        items: [
                            { id: 5, name: "S&E Chak", groupId: 2 },
                            { id: 6, name: "Ex Chak", groupId: 2 },
                            { id: 7, name: "Re Spel ", groupId: 3 }
                        ]
                    }
                ],
            };
        },
        methods: {
            onGroupsChange(e) {
                console.log({ e });
            },

            someDummyMethod() {
                console.log('Hello from someDummyMethod');
            }
        }
    }
</script>

<style scoped>
</style>
