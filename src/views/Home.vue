<template>
    <div class="home">
        <!-- <transformie></transformie> -->
        <!-- <game-map></game-map> -->
<!--        <joint-map></joint-map>-->
        <joint-chess-map></joint-chess-map>
    </div>
</template>

<script>
    import GameMap from '../components/GameMap.vue'
    import JointMap from '../components/JointMap.vue'
    import JointChessMap from '../components/JointChessMap.vue'
    import Transformie from '../components/Transformie.vue'

    export default {
        name: 'home',
        components: {
            GameMap, Transformie, JointMap, JointChessMap
        }
    }
</script>
