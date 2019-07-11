<template>
    <div id="app">
        <header>
            <img id="logo" src="./assets/sardarthion_house.png"  >

            <h1>
                Cruenti Dei
            </h1>

            <div id="box" ref="box"></div>

            <div id="nav">
                <router-link to="/">
                    Home
                </router-link>
                |
                <router-link to="/play">
                    Play
                </router-link>
                |
                <router-link to="/about">
                    About
                </router-link>
            </div>

        </header>

        <router-view/>

        <div id="modalStack" v-for="(modalObject, index) in modals">
            <component :modal-data="modalObject.data" :is="modalObject.modalName"/>
        </div>
    </div>
</template>

<script>
    import {TimelineMax, Back} from 'gsap'

    import LoadRegions from './commands/LoadRegions';
    import GetNameModal from "./components/GetNameModal";

    export default {
        name: "App",
        components: {
            GetNameModal,
        },
        data () {
            return {
                modals: [],
                eventList: ["open-modal", "close-modal", "error"],
                timeLine: new TimelineMax(),
            }
        },

        created() {
            this.eventList.forEach((eventName) => {
                this.$bus.$on(eventName, (data) => {
                    this.eventSwitch(eventName, data);
                });
            });

            this.$store.dispatch(
                    {
                        type:'onDispatch',
                        command: new LoadRegions()
                    }
            ).then(
                    result => {
                        // all's well
                        // console.log('Initial loading of regions succeeded');
                    }
            ).catch(
                    error => {
                        console.log(error);
                        // console.log('Initial loading of region data failed');
                    }
            );
        },

        mounted() {
            this.timeLine.fromTo(
                    this.$refs.box, 3,
                    {
                        x: 100,
                        rotation: -180,
                        scale: .4,
                        background: '#852c3d',
                    },
                    {
                        x: 600,
                        rotation: 190,
                        background: '#336699',
                        scale: .8,
                        ease: Back.easeInOut,
                        onComplete: this.ungo,
                        onReverseComplete: this.gogo,
                    }
            );
        },

        beforeDestroy () {
            this.eventList.forEach(eventName => {
                this.$bus.$off(eventName);
            });
        },

        methods: {
            eventSwitch: function(event, data) {
                if (typeof event !== "undefined") {
                    switch (event) {
                        case 'open-modal': {
                            this.modals.push(data);
                            break;
                        }
                        case 'close-modal': {
                            this.modals.pop();
                            break;
                        }
                    }
                }
            },

            gogo() {
                this.timeLine.play();
            },
            ungo() {
                this.timeLine.reverse();
            },
        },
    }
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
    }

    a {
        color: whitesmoke;
    }

    p {
        padding-left: 5px;
        padding-right: 5px;
    }

    header {
        color: whitesmoke;
        display: flex;
        width: 100%;
        height: 60px;
        background: #000000;
    }

    #logo {
        height: 40px;
        padding: 10px;
    }

    #box {
        height: 60px;
        width: 60px;
        background: #60653e;
    }

    #nav {
        margin-left: auto;
        padding: 10px;
    }

</style>
