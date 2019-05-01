<template>
    <div class="home">
        <game-map></game-map>
        <transformie></transformie>
    </div>
</template>

<script>
    import GameMap from '../components/GameMap.vue'
    import Transformie from "./Transformie.vue"

    export default {
        name: 'home',
        components: {
            GameMap, Transformie
        }
    }
</script>
