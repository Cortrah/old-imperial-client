<template>

    <div class="container">

        <div class="left">
            <main-narrative></main-narrative>
        </div>

        <div class="main">
            <game-map></game-map>
        </div>

        <div>
            <el-button type="text" @click="openModal()">open</el-button>
            <el-button type="text" @click="notifyGuy('hoho hi')">note</el-button>
        </div>

        <div class="right">
            <leader-actions></leader-actions>
        </div>
    </div>

</template>

<script>
    import LeaderActions from '../components/LeaderActions';
    import MainNarrative from '../components/MainNarrative';
    import GameMap from "../components/GameMap";

    export default {
        name: "Play",
        components: {
            GameMap,
            MainNarrative,
            LeaderActions
        },
        methods: {
            openModal() {
                let dataForModal = {
                    modalName: "ActionModal",
                    formData: {
                        actionType: "cb"
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
        align-items: start;
        justify-content: center;
        margin-left: 0.5rem;
        background-color: #f4f4f4;
        flex: 0 0 auto;
    }

    .main {
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
        align-items: start;
        justify-content: center;
        margin-right: 0.5rem;
        background-color: #e4e4e4;
        flex: 0 0 auto;
    }

    .footer {
        height: 60px;
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

