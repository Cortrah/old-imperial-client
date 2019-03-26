<template>
    <div class="game-map">
        <map-region></map-region>
    </div>
</template>

<script>
    import MapRegion from "./MapRegion";

    export default {
        name: "game-map",
        components: {MapRegion},
    }
</script>

<style>
    .game-map {
        position: absolute;
        height: 160px;
        width: 200px;
        background-color: #F8F8F8
    }
</style>
