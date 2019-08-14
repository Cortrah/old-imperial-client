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
        currentNarativeIndex: 0,
        game: {
            id:0,
            currentTurn: 0,
            turns: [{
                    id:0,
                    name: "0-5",
                    number: 1,
                    startingYear: 0,
                    endingYear: 5,
                    status: "Plotting",
                    dueDate: new Date(),
                    notes: "",
                    game: 0,
                    realms: [{
                        id: 0,
                        name: "County of Tokatl",
                        code: "Tok",
                        label: "Tokatl",
                        description: "An inimitalbe bounty of strange.",
                        herald: {
                            name: "skipperway",
                            img: "../assets/avatars/chitixi.jpg"
                        },
                        color: 0,
                        isSecret: false,
                        capitalLocation: 0,
                        homeRegion: 0,
                        religion: 0,
                        realmType: 0,
                        startingIsi: 0.0,
                        endingIsi: 0.0,
                        startingTv: 0.0,
                        endingTv: 0.0,
                        mana: 0.0,
                        regionGp: 0.0,
                        urbanGp: 0.0,
                        ictGp: 0.0,
                        pwbGp: 0.0,
                        roadGp: 0.0,
                        savedGp: 0.0,
                        prodAp: 0.0,
                        savedAp: 0.0,
                        totalAp: 0.0,
                        nfp: 0.0,
                        sfp: 0.0,
                        armySupport: 0.0,
                        cavQr:0,
                        infQr:0,
                        sgeQr:0,
                        navQr:0,
                        airQr:0,
                        nsrQr:0,
                        irQr:0,
                        blQr:0,
                        rsQr:0,
                        celQr:0,
                        notes:"",
                        regions:[],
                        tradeAgreements: [],
                        militaryAgreements: [],
                        turnActions: [],
                        leaderActions: [
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
                        realmActions:[],
                        narratives:[],
                        hiddenRegions: [],
                        hiddenLocations: [],
                    }],
                    majorMaps: [{
                        id:0,
                        name: "Imperial Sahul",
                        code: "Sah",
                        label: "Sahul",
                        regions: [],
                    }],
                    narratives: [{
                            id:0,
                            title: "Sahul Chronicle",
                            type: "MajorMapNarrative",
                            icon: "el-icon-reading",
                            heading: "Signs and Portents",
                            body: "The Midsummer meteor shower contin-ued  each  year,  and  numerous  'shooting  stars'  lit  up  the  skies  at  other  times  as  well. None, however, crashed to earth.On a warm summer evening in 1565, those ob-serving the waxing crescent moon saw a terrifying sight. The upper horn of the moon split in two, and from the midpoint of the division a flaming torch sprang up. It spewed out fire, hot coals, and sparks over a considerable distance. Meanwhile the rest of the  Moon  writhed  and  throbbed  like  a  wounded  snake. Afterwards it resumed its proper state. As  if  this  weren’t  apocalyptic  enough,  three  days later a rain of shooting stars fell through the sky  in  the  vicinity  of  the  Moon.  At  first,  it  was  similar to the delicate beauty of the Midsummer Meteor shower. Within hours, however, they be-gan  increasing,  soon  falling  at  a  prodigious  rate.  Before the night was over, it was as if a blizzard of tiny flaming lights were falling from the Moon.They only ceased when the sun rose, its power-ful light washing away the transitory brightness of the falling stars. The next day, the strange ce-lestial events were the topic of conversation in ev-ery city, town, village, and farmstead throughout Oratoa and Sahûl. Opinions  ranged  from  the  event  being  noth-ing more than a particularly impressive (but ordi-nary) meteor shower, to being an evil omen. Some thought  that  it  was  the  beginning  of  the  end  of  the world.Even before the Moon rose the next evening, a flurry of meteors could be seen on the horizon. As the Moon rose, the number of shooting stars dra-matically increased, until again it was as through the stars fell like rain. Mass panic ensued. The  density  of  the  falling  stars  soon  thinned;  within  just  a  few  days  it  was  more  of  a  sprinkle  than  a  monsoon,  but  it  was  a  month  before  it  ceased entirely."
                        },{
                            id:1,
                            title: "Realm Reports",
                            type: "RealmNarrative",
                            icon: "el-icon-notebook-2",
                            body: ""
                        },{
                            id:2,
                            title: "Agent Journals",
                            type: "AgentNarrative",
                            icon: "el-icon-notebook-1",
                            body: ""
                        },{
                            id:3,
                            title: "The Agora",
                            type: "DiplomaticChannels",
                            icon: "el-icon-chat-line-square",
                            body: ""
                        },{
                            id:4,
                            title: "Imperial Gazetteer",
                            type: "ImperialGazetteer",
                            icon: "el-icon-data-analysis",
                            body: ""
                        },{
                            id:5,
                            title: "Imperial Strength Index",
                            type: "ImperialStrengthIndex",
                            icon: "el-icon-data-line",
                            body: ""
                        },{
                            id:6,
                            title: "Guide",
                            type: "GuideBook",
                            icon: "el-icon-guide",
                            body: ""
                        }
                    ]
                }
            ],
        },
        regions: [],
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
    getters: {
        currentLeftPaneView: state => () => {
            return state.game.turns[0].narratives[state.currentNarativeIndex].type;
        },
        currentTurn: state => () => {
            return state.game.turns[0];
        },
        realmTurn: state => () => {
            return this.currentTurn().realms[0];
        },
        editingRegion: state => (regionId) =>{
            let indexById = state.regions.findIndex( region => region.id == regionId);
            return state.regions[indexById];
        },
        getLeaderActionSubTypes: state => (leaderActionType) => {
            let indexByCode = state.static.leaderActionTypes.findIndex( item => item.code == leaderActionType);
            return state.static.leaderActionTypes[indexByCode].subTypes;
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
