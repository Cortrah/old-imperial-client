<template>
  <div class="BaseMap">

      <div id="toolbar">
          <el-button-group style="width:280px; float:left">
              <el-button type="primary" icon="el-icon-picture" size="mini"></el-button>
              <el-button type="primary" icon="el-icon-location" size="mini"></el-button>
              <el-button type="primary" icon="el-icon-view" size="mini"></el-button>
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
              <el-button type="primary" icon="el-icon-view" size="mini"></el-button>
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          </el-button-group>
          <div class="block">
              <el-slider v-model="zoom" v-on:change="zoomChanged"
                         style="width:300px; float:right; padding-right:15px">
              </el-slider>
          </div>
      </div>

      <img id="map" src="../assets/sahul20bnw8.png" :style="{ width: mapWidth + '%', height: mapHeight + '%' }"></img>

  </div>
</template>

<script>
    export default {
        name: "BaseMap",
        data() {
            return {
                zoom: 40,
            }
        },
        computed: {
            mapHeight: function () {
                return this.zoom * 10;
            },
            mapWidth: function () {
                return this.zoom * 10;
            },
        },
        methods: {
            zoomChanged: function (event) {
                if(event > 10){
                    this.zoom = event;
                } else {
                    this.zoom = 10;
                }
            },
        },
    }
</script>

<style scoped>

  .BaseMap {
      text-align: left;
      background-color: #333333;
  }

  #map {
      z-index: 500;
  }

  #toolbar {
      height: 30px;
      top: 60px;
      width: 100%;
      color: #999999;
      background-image: url("../assets/transparent_grey.png");
      padding: 5px;
      position: fixed;
      z-index: 600;

      -moz-box-shadow: 6px 6px 8px #666;
      -webkit-box-shadow: 6px 6px 8px #666;
      box-shadow: 6px 6px 8px #666;
      /* For IE 8 */
      -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=8, Direction=180, Color='#666666')";
      /* For IE 5.5 - 7 */
      filter: progid:DXImageTransform.Microsoft.Shadow(Strength=8, Direction=180, Color='#666666');
  }

</style>
