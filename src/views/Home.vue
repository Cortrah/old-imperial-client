<template>
    <div class="home">
        <game-map></game-map>
        <transformie></transformie>
        <joint-map></joint-map>
    </div>
</template>

<script>
    import GameMap from '../components/GameMap.vue'
    import JointMap from '../components/JointMap.vue'
    import Transformie from '../components/Transformie.vue'

    export default {
        name: 'home',
        components: {
            GameMap, Transformie, JointMap
        }
    }
</script>
