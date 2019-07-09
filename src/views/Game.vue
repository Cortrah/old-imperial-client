<template>

    <div class="container">

        <div class="left">
            <h2>
                Narrative
            </h2>
        </div>

        <main>
            <joint-region-map></joint-region-map>
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


</template>

<script>
    import JointRegionMap from '../components/JointRegionMap.vue'
    import LeaderActions from "../components/LeaderActions";

    export default {
        name: "Game",
        components: {
            JointRegionMap,
            LeaderActions
        },
        methods: {
            openModal() {
                console.log("openmodal");
                let dataForModal = {
                    modalName: "GetNameModal",
                    data: {
                        initialName: "Joe Joe"
                    },
                };
                this.$bus.$emit('open-modal', dataForModal);
            },
            notifyGuy(msg){
                this.$notify({
                    title: 'Note',
                    message: msg,
                    position: 'bottom-right'
                });
            }
        }
    }
</script>

<style>

    .container {
        display: grid;
        grid-template-areas:
                "left content right"
                "footer footer footer";
        height: 100vh;
        grid-template-columns: 260px 1fr 220px;
        grid-template-rows: 1fr auto;
        grid-gap: 10px;
        overflow: hidden;
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

    footer {
        grid-area: footer;
        background: #000000;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-areas:
                    "header"
                    "left"
                    "main"
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

