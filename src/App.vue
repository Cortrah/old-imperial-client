<template>
    <div id="app">

        <div class="container">
            <header>
                <h1>
                    <img src="./assets/sardarthion_house.png" height="40px" style="padding-left: 10px" >
                    Old Imperial
                </h1>
                <div ref="box" class="box"></div>
                <div id="nav">
                    <router-link to="/">
                        Home
                    </router-link>
                        |
                    <router-link to="/game">
                        Game
                    </router-link>
                        |
                    <router-link to="/about">
                        About
                    </router-link>
                </div>
            </header>

            <div class="left">
                <h2>
                    Narrative
                </h2>
            </div>

            <main>
                <router-view/>
            </main>

            <div class="right">
                <leader-actions></leader-actions>
            </div>

            <footer>
                <h3>
                    Popup Windows
                    <el-button type="text" @click="openModal()">open</el-button>
                    <el-button type="text" @click="notifyGuy('hoho hi')">note</el-button>
                </h3>
            </footer>
        </div>

        <div id="modalStack" v-for="(modalObject, index) in modals">
            <component :modal-data="modalObject.data" :is="modalObject.modalName"/>
        </div>
    </div>
</template>

<script>
    import {TimelineMax, Back} from 'gsap'

    import LeaderActions from "./components/LeaderActions";
    import LoadRegions from './commands/LoadRegions';
    import GetNameModal from "./components/GetNameModal";

    export default {
        name: "App",
        components: {
            GetNameModal,
            LeaderActions
        },
        data () {
            return {
                modals: [],
                timeLine: new TimelineMax(),
            }
        },
        mounted() {
            this.timeLine.fromTo(
                this.$refs.box, 3,
                {
                    x: -300,
                    rotation: -180,
                    scale: .4,
                    background: '#852c3d',
                },
                {
                    x: 300,
                    rotation: 190,
                    background: '#336699',
                    scale: .8,
                    ease: Back.easeInOut,
                    onComplete: this.ungo,
                    onReverseComplete: this.gogo,
                }
            );
        },
        methods: {
            gogo() {
                this.timeLine.play();
            },
            ungo() {
                this.timeLine.reverse();
            },
            openModal() {
                this.modals.push({
                    modalName: "GetNameModal",
                    data:{
                        initialName: "Joe Joe"
                    }
                });
            },
            notifyGuy(msg){
                this.$notify({
                    title: 'Note',
                    message: msg,
                    position: 'bottom-right'
                });
            }
        },
        created() {
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
    }
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
    }

    h1, h3, a {
        color: whitesmoke;
    }

    .container {
        display: grid;
        grid-template-areas:
                "header header header"
                "left content right"
                "footer footer footer";
        height: 100vh;
        grid-template-columns: 260px 1fr 220px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
        overflow: hidden;
    }

    header {
        display: flex;
        grid-area: header;
        justify-content: space-between;
        align-items: center;
        background: #000000;
    }

    .left {
        display: flex;
        grid-area: left;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        background-color: #f4f4f4;
        flex: 0 0 auto;
    }

    main {
        position: absolute;
        top: 90px;
        left: 260px;
        right: 220px;
        height: 80%;
        overflow: scroll;
        box-sizing: border-box;
    }

    .right {
        display: flex;
        grid-area: right;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        background-color: #e4e4e4;
        flex: 0 0 auto;
    }

    .box {
        height: 60px;
        width: 60px;
        background: #60653e;
    }

    footer {
        grid-area: footer;
        background: #000000;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-areas:
                    "header"
                    "left"
                    "content"
                    "right"
                    "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;
        }
        left, right {
            margin: 0;
        }
    }
</style>
