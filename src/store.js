import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        static: {
            colors: {
                "hovered": "#FFFFFF",
                "unpainted": "#F5F5F5",
                "painted": "#D5D5D5",
                "hover-painted": "#DDDDDD"
            },
            textures: {
                "clear": "#F5F5F5",
                "forest": "url('images/tiles/trees_2b.png')",
                "hills": "url('images/tiles/hills.png')",
                "mountain": "url('images/tiles/sandysoil.png')",
                "water": "url('images/tiles/water.png')"
            }
        },

    },
    mutations: {},
    actions: {}
})
