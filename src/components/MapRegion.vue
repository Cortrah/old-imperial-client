<template>
    <div class="MapRegion">
        MapRegion
        <location></location>
        <ActorMarker></ActorMarker>
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
    .MapRegion {
        position: absolute;
        height: 100px;
        width: 100px;
        padding: 2px;
        background-color: #edd9e1;
    }
</style>
