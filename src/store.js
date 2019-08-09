import Vue from 'vue'
import Vuex from 'vuex'
import joint from '../node_modules/jointjs';

import Region from './domain/Region';
import LoadRegions from './commands/LoadRegions';
import { leaderActionTypes } from './domain/Types/StaticTypes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isServerLive: false,
        appView: null,
        regions: [],
        leaderActions:[
            {
                id: 1,
                name: "Previous Phases",
                items: [
                    { id: 1, name: "Mv C.Sut~Tak", groupId: 1 },
                    { id: 2, name: "Dp Tak", groupId: 1 },
                    { id: 3, name: "Ex Tak", groupId: 1 }
                ]
            },
            {
                id: 2,
                name: "Phase 10",
                items: [
                    { id: 4, name: "Mv Tak:Chak", groupId: 2 },
                ]
            },
            {
                id: 3,
                name: "Next Phases",
                items: [
                    { id: 5, name: "S&E Chak", groupId: 3 },
                    { id: 6, name: "Ex Chak", groupId: 3 },
                    { id: 7, name: "Re Spel ", groupId: 3 }
                ]
            }
        ],
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
            },
            leaderActionTypes: leaderActionTypes
        },

    },
    actions: {
        onInit(context, payload){
            this.dispatch(
                {
                    type:'onDispatch',
                    command: new LoadRegions()
                }
            ).then(
                result => {
                    // all's well
                    // console.log('Initial loading of regions succeeded');
                }
            ).catch(
                error => {
                    console.log(error);
                    // console.log('Initial loading of region data failed');
                }
            );
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
