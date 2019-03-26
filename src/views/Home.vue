<template>
    <div class="home">
        <game-map></game-map>
    </div>
</template>

<script>
    import GameMap from '../components/GameMap.vue'

    export default {
        name: 'home',
        components: {
            GameMap
        }
    }
</script>
