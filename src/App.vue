<template xmlns="http://www.w3.org/1999/html">
    <div id="app">
        <div class="container">
            <header>
                <img id="logo" src="./assets/sardarthion_house.png"  >

                <h1 class="lightOnDark">
                    Old Imperial
                    <em style="font-size: small; font-family: OldStyleItalic"> 1561-1565 sa</em>
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

            <div v-if="$store.state.currentLayout==='Stage'" class="left">
                <MainNarrative></MainNarrative>
            </div>

            <div class="main">
                <MapContainer/>
            </div>

            <div v-if="$store.state.currentLayout==='Stage'" class="right">
                <LeaderActions/>
            </div>

            <footer v-if="$store.state.currentLayout==='Stage'">
                <div>
                     Footer
                </div>
            </footer>
        </div>

        <div id="modalStack" v-for="(modalObject, index) in modals">
            <component :modal-data="modalObject.data" :is="modalObject.modalName"/>
        </div>
    </div>
</template>

<script>
    import {TimelineMax, Back} from 'gsap'

    import ActionModal from "./components/ActionModal";
    import RightPanel from "./components/RightPanel";
    import LeftPanel from "./components/LeftPanel";
    import MainNarrative from "./components/MainNarrative";
    import MainPanel from "./components/MainPanel";
    import GameMap from "./components/GameMap";
    import LeaderActions from "./components/LeaderActions";
    import BaseModal from "./components/modals/BaseModal";
    import SessionModal from "./components/modals/SessionModal";
    import MapContainer from "./components/MapContainer";

    export default {
        name: "App",

        components: {
            MapContainer,
            LeaderActions,
            RightPanel, LeftPanel, BaseModal, SessionModal, MainNarrative
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
                    x: 400,
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
            openBaseModal(msg) {
                let dataForModal = {
                    modalName: "BaseModal",
                    data: {
                        actionType: msg,
                        note: ""
                    },
                };
                this.$bus.$emit('open-modal', dataForModal);
            },
            openSessionModal(msg) {
                let dataForModal = {
                    modalName: "SessionModal",
                    data: {
                        formData: {
                            email: "",
                            password: "",
                            rememberMe: false,
                        }
                    },
                };
                this.$bus.$emit('open-modal', dataForModal);
            },
        }
    }
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
        font-family: 'OldStyle';
    }

    h1 {
        font-family: Max;
        font-weight: lighter;
    }

    .lightOnDark {
        color: white;
        background-color: black;
    }

    .darkOnLight {
        color: black;
        background-color: white;
    }

    a {
        color: whitesmoke;
    }

    p {
        font-family: OldStyle;
        padding-left: 1em;
        padding-right: 1em;
    }

    .container {
        display: grid;
        grid-template-areas:
                "header header header"
                "left main right"
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
        height: 4em;
        background: #000000;
    }

    .left {
        display: flex;
        grid-area: left;
        margin-left: 0.5rem;
        background-color: #f4f4f4;
        flex: 0 0 auto;
    }

    .main {
        display: flex;
        align-items: flex-start;
        overflow: scroll;
        box-sizing: border-box;
    }

    .right {
        display: flex;
        grid-area: right;
        margin-right: 0.5rem;
        background-color: #e4e4e4;
        flex: 0 0 auto;
    }

    footer {
        height: 3em;
        grid-area: footer;
        background: #000000;
        color: white;
    }

    #box {
        height: 60px;
        width: 60px;
        background: #60653e;
    }

    #logo {
        height: 40px;
        padding: 10px;
    }

    #nav {
        margin-left: auto;
        padding: 10px;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-areas: "header" "left" "main" "right" "footer";
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;
        }

        left, right {
            margin: 0;
        }
    }

    @font-face {
        font-family: Max;
        src: url("assets/fonts/maximilian.ttf") format("truetype");
    }

    @font-face {
        font-family: OldStyle;
        src: url("assets/fonts/oldstyle.ttf") format("truetype");
    }

    @font-face {
        font-family: OldStyleItalic;
        font-style: italic;
        src: url("assets/fonts/oldstyle_italic.ttf") format("truetype");
    }

    @font-face {
        font-family: OldStyleSmallCaps;
        font-style: italic;
        src: url("assets/fonts/oldstyle_smallcaps.ttf") format("truetype");
    }

</style>

<!--<script>-->
<!--    export default {-->
<!--        name: "App",-->
<!--        components: {-->
<!--            LeaderActions,-->
<!--            MainPanel, MainNarrative, ActionModal, LeftPanel, RightPanel-->
<!--        },-->

<!--        data () {-->
<!--            return {-->
<!--                modals: [],-->
<!--                eventList: ["open-modal", "close-modal", "error"],-->
<!--                timeLine: new TimelineMax(),-->
<!--            }-->
<!--        },-->

<!--        created() {-->
<!--            this.eventList.forEach((eventName) => {-->
<!--                this.$bus.$on(eventName, (data) => {-->
<!--                    this.eventSwitch(eventName, data);-->
<!--                });-->
<!--            });-->
<!--        },-->

<!--        mounted() {-->
<!--            this.timeLine.fromTo(-->
<!--                    this.$refs.box, 3,-->
<!--                    {-->
<!--                        x: 100,-->
<!--                        rotation: -180,-->
<!--                        scale: .4,-->
<!--                        background: '#852c3d',-->
<!--                    },-->
<!--                    {-->
<!--                        x: 600,-->
<!--                        rotation: 190,-->
<!--                        background: '#336699',-->
<!--                        scale: .8,-->
<!--                        ease: Back.easeInOut,-->
<!--                        onComplete: this.ungo,-->
<!--                        onReverseComplete: this.gogo,-->
<!--                    }-->
<!--            );-->
<!--        },-->

<!--        beforeDestroy () {-->
<!--            this.eventList.forEach(eventName => {-->
<!--                this.$bus.$off(eventName);-->
<!--            });-->
<!--        },-->

<!--        methods: {-->
<!--            eventSwitch: function(event, data) {-->
<!--                if (typeof event !== "undefined") {-->
<!--                    switch (event) {-->
<!--                        case 'open-modal': {-->
<!--                            this.modals.push(data);-->
<!--                            break;-->
<!--                        }-->
<!--                        case 'close-modal': {-->
<!--                            this.modals.pop();-->
<!--                            break;-->
<!--                        }-->
<!--                    }-->
<!--                }-->
<!--            },-->

<!--            gogo() {-->
<!--                this.timeLine.play();-->
<!--            },-->
<!--            ungo() {-->
<!--                this.timeLine.reverse();-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--<style>-->
<!--    .container {-->
<!--        display: grid;-->
<!--        grid-template-areas:-->
<!--                "header header header"-->
<!--                "left main right"-->
<!--                "footer footer footer";-->
<!--        height: 100vh;-->
<!--        grid-template-columns: 260px 1fr 220px;-->
<!--        grid-template-rows: auto 1fr auto;-->
<!--        grid-gap: 10px;-->
<!--        overflow: hidden;-->
<!--    }-->

<!--    header {-->
<!--        display: flex;-->
<!--        grid-area: header;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        height: 4em;-->
<!--        background: #000000;-->
<!--    }-->

<!--    .left {-->
<!--        display: flex;-->
<!--        grid-area: left;-->
<!--        align-items: center;-->
<!--        justify-content: center;-->
<!--        margin-left: 0.5rem;-->
<!--        background-color: #f4f4f4;-->
<!--        flex: 0 0 auto;-->
<!--    }-->

<!--    .main {-->
<!--        display: flex;-->
<!--        align-items: flex-start;-->
<!--        overflow: scroll;-->
<!--        box-sizing: border-box;-->
<!--    }-->

<!--    .right {-->
<!--        display: flex;-->
<!--        grid-area: right;-->
<!--        align-items: center;-->
<!--        justify-content: center;-->
<!--        margin-right: 0.5rem;-->
<!--        background-color: #e4e4e4;-->
<!--        flex: 0 0 auto;-->
<!--    }-->

<!--    footer {-->
<!--        height: 3em;-->
<!--        grid-area: footer;-->
<!--        background: #000000;-->
<!--        color: white;-->
<!--    }-->
<!--</style>-->
