<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    }
</script>

<style scoped lang="scss">
</style>

<!--<template>-->
<!--    <div class="home">-->
<!--        <div id="toolbar">-->
<!--            <el-button-group>-->
<!--                <el-button type="primary" icon="el-icon-picture" size="mini"></el-button>-->
<!--                <el-button type="primary" icon="el-icon-location" size="mini"></el-button>-->
<!--                <el-button type="primary" icon="el-icon-view" size="mini"></el-button>-->
<!--                <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>-->
<!--                <el-button type="primary" icon="el-icon-view" size="mini"></el-button>-->
<!--                <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>-->

<!--            </el-button-group>-->
<!--            <el-slider id="zoomSlider"-->
<!--                       v-model="zoom" v-on:change="zoomChanged">-->
<!--            </el-slider>-->
<!--        </div>-->

<!--        <img id="map" src="../assets/bigsvg.svg" :style="{ width: mapWidth + '%', height: mapHeight + '%' }"></img>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--    export default {-->
<!--        name: 'MainPanel',-->

<!--        data() {-->
<!--            return {-->
<!--                zoom: 40,-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            mapHeight: function () {-->
<!--                return this.zoom * 10;-->
<!--            },-->
<!--            mapWidth: function () {-->
<!--                return this.zoom * 10;-->
<!--            },-->
<!--        },-->
<!--        methods: {-->
<!--            zoomChanged: function (event) {-->
<!--                if(event > 10){-->
<!--                    this.zoom = event;-->
<!--                } else {-->
<!--                    this.zoom = 10;-->
<!--                }-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--<style scoped lang="scss">-->

<!--    .home {-->
<!--        width: 100%;-->
<!--    }-->

<!--    #map {-->
<!--        text-align: left;-->
<!--        z-index: 500;-->
<!--        background-color: #333333;-->
<!--    }-->

<!--    #toolbar {-->
<!--        display: flex;-->
<!--        justify-content: flex-start;-->
<!--        flex-wrap: wrap;-->
<!--        width: 100%;-->
<!--    }-->

<!--    #zoomSlider {-->
<!--        align-self: flex-end;-->
<!--        width: 300px;-->
<!--        margin-left: 40px;-->
<!--    }-->
<!--</style>-->
