<template>
    <div class="ground">
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
    .ground {
        position: absolute;
        height: 180px;
        width: 300px;
        background-color: #F8F8F8
    }
</style>
