<template>
    <div class="map-region">
        MapRegion
        <location x="20" y="20"></location>
        <ActorMarker x="60" y="60"></ActorMarker>
    </div>
</template>

<script>
    import Location from "./Location";
    import ActorMarker from "./ActorMarker";
    export default {
        name: "MapRegion",
        components: {ActorMarker, Location},
        props: {
            locations: [],
        },
    }
</script>

<style>
    .map-region {
        position: absolute;
        height: 100px;
        width: 100px;
        padding: 2px;
        background-color: #edd9e1;
    }
</style>
