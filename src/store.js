import Vue from 'vue'
import Vuex from 'vuex'
import joint from '../node_modules/jointjs';

import Region from './domain/Region';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isServerLive: false,
        appView: null,
        regions: [],
        leaderActions: [],
        getters: {
            editingRegion: state => (regionId) =>{
                let indexById = state.regions.findIndex( region => region.id == regionId);
                return state.regions[indexById];
            }
        },
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
    actions: {
        onInit(context, payload){
            context.commit("init", payload);
            this.state.graph = new joint.dia.Graph;
        },
        async onDispatch(context, action) {
            // console.log("store onDispatch action called");
            // console.log(this);
            // console.log(context);
            // console.log(action);
            // console.log(action.command);
            // console.log(action.command.thing1());
            // console.log(await action.command.thing2());
            return action.command.onDispatch(context, action);
        },
    },
    mutations: {
        do(state, payload) {
            // console.log("=== store do mutation called ===");
            // console.log(state);
            // console.log(payload);
            // console.log(payload.action);
            // console.log(payload.action.type);
            // console.log(payload.action.command.name);
            // console.log(payload.action.command.data);
            return payload.action.command.do(state, payload.results);
        },
        init(state, payload){
            state.appView = payload;
        },
    },
})
