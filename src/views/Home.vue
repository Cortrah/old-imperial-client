<template>
    <div class="home">
<!--        <transformie></transformie>-->
<!--        <game-map></game-map>-->

        <joint-chess-map></joint-chess-map>

    </div>
</template>

<script>
    import GameMap from '../components/GameMap.vue'
    import JointChessMap from '../components/JointChessMap.vue'
    import Transformie from '../components/Transformie.vue'

    export default {
        name: 'home',
        components: {
            GameMap, Transformie, JointChessMap
        }
    }
</script>
