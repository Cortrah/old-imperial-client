import Command from "./Command";
import Region from "../domain/Region";
import {getRegions} from "../api/RegionHttp";

export default class LoadRegions extends Command{

    constructor(data) {
        super('LoadRegions', data);
    }

    // actions
    async onDispatch(context, action) {

        if(context.state.isServerLive){
            await getRegions()
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            let mockResponse = {
                data:[
                    {
                        "id" : "247",
                        "pathId": "_x33_0",
                        "name": "Takohn",
                        "label": "Takohn",
                        "code": "Tak",
                        "tooltip": "Place of the innumerable Ghoulfarb Fullsuit",
                        "description": "The northermost region of Tapori",
                        "notes": "",
                        "turn": null,
                        "realm": null,
                        "allegiance": null,
                        "resistance": 3,
                        "kindred": null,
                        "terrain": null,
                        "religion": null,
                        "statuses": null,
                        "features": null,
                        "constructs": null,
                        "locations": [
                            {
                                "id": 0,
                                "name": "Takohn:co",
                                "code": "Tak:co",
                                "label": "",
                                "icon": "./img/glyphs/tarotist1.png",
                                "w": 30,
                                "h": 30,
                                "x": 740,
                                "y": 4144,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            },
                            {
                                "id": 1,
                                "name": "Ahnupat",
                                "code": "Ahn",
                                "label": "",
                                "icon": "./img/glyphs/city3.png",
                                "w": 30,
                                "h": 23,
                                "x": 700,
                                "y": 394,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            },
                            {
                                "id": 2,
                                "name": "Ahnupat:Port",
                                "code": "P",
                                "label": "",
                                "icon": "./img/glyphs/port.png",
                                "w": 15,
                                "h": 15,
                                "x": 760,
                                "y": 330,
                                "path": "m0,0 L15,0 L15,15 L0,15 z"
                            },
                            {
                                "id": 3,
                                "name": "Tza'kapat",
                                "code": "Tza",
                                "label": "",
                                "icon": "./img/glyphs/city2.png",
                                "w": 30,
                                "h": 23,
                                "x": 700,
                                "y": 394,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            }
                        ],
                        "borders": [
                            {
                                id : '0',
                                name: "Takohn~Cape Sutrom",
                                code: "Tak~Cp.Sut",
                                borderType: {
                                    id : '1',
                                    name: "Coast",
                                    code: "~",
                                    description: "The coast between a water and land body",
                                    landCost: 0,
                                    airCost: 0,
                                    navalCost: 1,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 247,
                                sink: 1014,
                                isSecret: false,
                            },
                            {
                                id : '1',
                                name: "Takohn:Chakah",
                                code: "Tak:Chak",
                                borderType: {
                                    id : '0',
                                    name: "Adjacent",
                                    code: ":",
                                    description: "The default border between two land regions",
                                    landCost: 1,
                                    airCost: 0,
                                    navalCost: 0,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 247,
                                sink: 873,
                                isSecret: false,
                            }
                        ],
                        "majorMap": null,
                        "gp": 4,
                        "ap": 3,
                        "nfp": 3,
                        "mana": 1,
                        "pwb": 0,
                        "tv": 0,
                        "hasRoad": false,
                        "isSecret": false,
                        "bordersVolcano": false,
                        "isInimical": false,
                        "cellType": "Region",
                        "pathFill": "#737144",
                        "x": 676,
                        "y": 249,
                        "w": 75,
                        "h": 117,
                        "cX": 50,
                        "cY": 50,
                        "pathData": "M704.271,249.39c2.066,2.598,3.596,5.747,6.503,7.513c5.604-0.062,11.917,0.58,15.505-1.503                            c2.272,0.268,1.658,2.26,2.5,3.506c1.213,1.797,3.498,2.824,4.502,5.009c1.618,3.522-0.062,7.666,1,11.521                            c1.031,3.751,5.7,5.039,7.002,8.013c0.45,2.061-0.59,4.185,0,6.511c0.892,3.519,7.264,5.153,8.002,9.018                            c0.246,1.283-0.699,2.299-1,4.007c-0.757,4.303,0.168,7.935-2.5,10.521c-1.016,4.561,0.979,7.686,1.5,11.02                            c0.27,1.729-0.375,3.669,0,5.009c0.578,2.064,2.741,3.516,3,5.512c0.447,3.418-2.986,11.014-4.5,13.021                           c0.284,6.297-2.838,9.183-3.001,15.027c-4.927-0.758-7.486,0.851-9.003,3.506c-3,0-6.003,0-9.004,0                            c-3.742-2.287-2.574-6.918-4.001-10.519c-1.79-4.519-7.006-6.604-9.502-10.021c-1.501,0-3.002,0-4.502,0                        c-1.822-4.02-5.449-6.229-7.503-10.019c-10.562-0.777-13.388-9.311-22.014-12.021c-0.512-2.942-0.056-6.038-0.501-9.016                            c-0.182-1.224-1.141-2.841-1-4.007c0.483-3.997,5.247-5.35,3.502-12.523c9.288-6.894,17.938-14.427,24.016-24.544                           c-0.494-4.015,0.681-6.363,0-9.518c-0.729-3.356-3.53-4.55-3.501-7.012C699.816,253.563,703.552,254.01,704.271,249.39z"
                    },
                    {
                        "id" : "873",
                        "pathId": "_x35_0",
                        "name": "Chakah",
                        "label": "Chakah",
                        "code": "Chak",
                        "tooltip": "",
                        "description": "",
                        "notes": "",
                        "turn": null,
                        "realm": null,
                        "allegiance": null,
                        "resistance": 3,
                        "kindred": null,
                        "terrain": null,
                        "religion": null,
                        "statuses": null,
                        "features": null,
                        "constructs": null,
                        "locations": [
                            {
                                "id": 7,
                                "name": "Chakah:co",
                                "code": "Chak:co",
                                "label": "",
                                "icon": "./img/glyphs/tarotist1.png",
                                "w": 30,
                                "h": 23,
                                "x": 720,
                                "y": 534,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            },
                            {
                                "id": 4,
                                "name": "Rogor",
                                "code": "Rog",
                                "label": "",
                                "icon": "./img/glyphs/city3.png",
                                "w": 30,
                                "h": 23,
                                "x": 700,
                                "y": 494,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            },
                            {
                                "id": 5,
                                "name": "Rogor:Priory",
                                "code": "Pr",
                                "label": "",
                                "icon": "./img/glyphs/priory.png",
                                "w": 15,
                                "h": 15,
                                "x": 760,
                                "y": 430,
                                "path": "m0,0 L15,0 L15,15 L0,15 z"
                            },
                            {
                                "id": 6,
                                "name": "Moogoo",
                                "code": "Moo",
                                "label": "",
                                "icon": "./img/glyphs/city2.png",
                                "w": 30,
                                "h": 23,
                                "x": 700,
                                "y": 494,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            }
                        ],
                        "borders": [
                            {
                                id : '2',
                                name: "Chakah~Cape Sutrom",
                                code: "Chakah~Cp.Sut",
                                borderType: {
                                    id : '1',
                                    name: "Coast",
                                    code: "~",
                                    description: "The coast between a water and land body",
                                    landCost: 0,
                                    airCost: 0,
                                    navalCost: 1,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 873,
                                sink: 1014,
                                isSecret: false,
                            },
                            {
                                id : '1',
                                name: "Takohn:Chakah",
                                code: "Tak:Chak",
                                borderType: {
                                    id : '0',
                                    name: "Adjacent",
                                    code: ":",
                                    description: "The default border between two land regions",
                                    landCost: 1,
                                    airCost: 0,
                                    navalCost: 0,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 247,
                                sink: 873,
                                isSecret: false,
                            }
                        ],
                        "majorMap": null,
                        "gp": 2,
                        "ap": 4,
                        "nfp": 3,
                        "mana": 2,
                        "pwb": 0,
                        "tv": 0,
                        "hasRoad": false,
                        "isSecret": false,
                        "bordersVolcano": false,
                        "isInimical": false,
                        "cellType": "Region",
                        "pathFill": "#737144",
                        "x": 640,
                        "y": 324,
                        "w": 103,
                        "h": 112,
                        "cX": 50,
                        "cY": 50,
                        "pathData": "M704.771,348.067c0.823,0.84,2.937,0.399,4.502,0.502c2.563,2.646,7.281,4.498,9.004,8.519                            c0.815,1.933,0.222,4.481,1,6.51c1.001,2.608,2.537,3.743,4.501,5.509c4.43-0.588,7.42,0.824,10.503,0                            c3.143-0.837,4.938-5.836,9.002-3.003c-1.562,4.114-1.286,10.066-4,13.022c-2.398,6.015,2.938,9.748,3.001,13.521                        c0.073,4.458-5.47,8.132-7.003,12.021c-10.229,3.449-23.188,4.167-21.508,19.538c-14.069-1.569-17.344,7.681-25.514,12.02                          c-2.061-7.117-3.544-14.812-8.502-19.031c-0.637-2.196-1.312-4.354-2.501-6.014c0.661-6.34-1.686-9.666-5.002-12.021                            c0.044-9.531-11.85-17.778-18.506-8.02c-5.501,0.166-11.01,0.341-13.505-2.505c0.105-2.729-0.345-6.021,0.5-8.014                            c9.268-2.241,12.038-10.986,17.008-17.532c0.201-2.134-0.48-5.159,0.5-6.512c11.706,2.833,16.733-7.104,14.004-17.031                            c-0.854-3.104-4.547-4.437-6.002-6.51c2.242-3.436,5.037-6.312,8.003-9.02c0.671,0.33,0.938,1.071,1,2.003                            c8.854,2.826,11.812,11.551,22.515,12.523C699.47,342.358,703.114,344.217,704.771,348.067z"
                    },
                    {
                        "id" : "1014",
                        "pathId": "_x38_",
                        "name": "Cape Sutrom",
                        "label": "Cape Sutrom",
                        "code": "Cp.Sut",
                        "tooltip": "",
                        "description": "",
                        "notes": "",
                        "turn": null,
                        "realm": null,
                        "allegiance": null,
                        "resistance": 3,
                        "kindred": null,
                        "terrain": null,
                        "religion": null,
                        "statuses": null,
                        "features": null,
                        "constructs": null,
                        "locations": [
                            {
                                "id": 8,
                                "name": "Cape Sutrom:co",
                                "code": "CapeS:co",
                                "label": "",
                                "leaders":[
                                    {
                                        id : '0',
                                        name: "Annavas",
                                        label: "L1",
                                        description: "",
                                        notes: "",
                                        items: [],
                                        unitTypeGroups: [],
                                        pathFill: '#F5F5F5',
                                        x: 780,
                                        y: 180,
                                        w: 30,
                                        h: 30,
                                        pathData: `m0,0 L30,0 L30,30 L0,30 z`,
                                    }
                                ],
                                "icon": "./img/glyphs/town.png",
                                "w": 30,
                                "h": 30,
                                "x": 800,
                                "y": 154,
                                "path": "m0,0 L30,0 L30,30 L0,30 z"
                            },
                        ],
                        "borders": [
                            {
                                id : '0',
                                name: "Takohn~Cape Sutrom",
                                code: "Tak~Cp.Sut",
                                borderType: {
                                    id : '1',
                                    name: "Coast",
                                    code: "~",
                                    description: "The coast between a water and land body",
                                    landCost: 0,
                                    airCost: 0,
                                    navalCost: 1,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 247,
                                sink: 1014,
                                isSecret: false,
                            }, {
                                id : '2',
                                name: "Chakah~Cape Sutrom",
                                code: "Chakah~Cp.Sut",
                                borderType: {
                                    id : '1',
                                    name: "Coast",
                                    code: "~",
                                    description: "The coast between a water and land body",
                                    landCost: 0,
                                    airCost: 0,
                                    navalCost: 1,
                                    manaCost: 0,
                                    isDirectional: false,
                                },
                                source: 873,
                                sink: 1014,
                                isSecret: false,
                            }
                        ],
                        "majorMap": null,
                        "gp": 0,
                        "ap": 0,
                        "nfp": 0,
                        "mana": 0,
                        "pwb": 0,
                        "tv": 0,
                        "hasRoad": false,
                        "isSecret": false,
                        "bordersVolcano": false,
                        "isInimical": false,
                        "cellType": "Region",
                        "pathFill": "#737144",
                        "x": 312,
                        "y": 139,
                        "w": 592,
                        "h": 363,
                        "cX": 50,
                        "cY": 50,
                        "pathData": "M903.339,139.192c0,89.996,0,179.988,0,269.985c-53.685,0-107.37,0-161.054,0\n" +
                            "                            c-1.7,0.329-0.194-1.172,0-1.503c2.228-3.771,6.246-8.513,8.002-13.022c-0.287-6.604-7.282-12.402-1-17.026\n" +
                            "                            c-1.59-2.477,0.693-4.993,1-7.516c0.325-2.646-0.473-5.255,0-8.015c0.297-1.723,1.515-3.1,2.001-5.008\n" +
                            "                            c0.504-1.975-0.021-4.269,0.501-6.011c0.529-1.783,2.188-3.861,3-6.515c1.721-5.64,3.174-13.328-1.5-17.528\n" +
                            "                            c0.251-3.928-0.087-7.263-1.5-9.52c2.293-4.883,1.693-12.664,5.001-16.531c-1.781-5.896-3.748-11.604-9.504-13.521\n" +
                            "                            c3.336-7.935-5.621-10.401-7.002-15.028c-1.086-3.642,0.143-7.225-1-10.518c-1.021-2.932-2.021-4.287-5.002-6.512\n" +
                            "                            c-0.737-5.206-3.85-8.279-8.001-8.515c-4.321-0.246-7.985,4.207-12.506,3.507c-4-3.319-5.1-12.189-12.511-11.02\n" +
                            "                            c-3.612,0.569-4.813,3.399-5.501,8.014c-2.247,2.928-5.513,4.935-5.502,9.016c0.02,4.609,5.062,7.887,5.002,12.521\n" +
                            "                            c-0.041,3.556-2.774,5.735-4.502,8.015c-1.805,2.393-3.521,4.233-5.501,7.013c-5.79,3.217-10.896,7.122-15.005,12.021\n" +
                            "                            c-0.048,2.726,1.194,2.917,1,5.008c-0.229,2.546-2.955,3.901-3.5,6.517c-0.587,2.799-0.155,6.333,1,9.516\n" +
                            "                            c-1.663,2.12-3.636,5.535-6.502,8.516c-2.945,3.062-7.021,4.573-7.003,8.018c0.033,4.868,6.074,4.998,9.002,8.515\n" +
                            "                            c-0.104,2.898,0.619,6.63-1.499,7.517c-6.506-0.812-5.256-9.517-12.505-8.52c-3.041,0.422-4.339,3.294-4.502,5.512\n" +
                            "                            c-0.314,4.29,4.184,8.247,4.002,12.021c-0.137,2.854-2.551,4.906-3.501,6.512c-1.412,2.385-2.021,4.177-3.5,6.011\n" +
                            "                            c-4.714,1.624-8.961,3.718-11.003,8.017c-0.019,3.02,0.852,5.156,0.5,8.515c-3.235-0.394-5.814-2.789-8.504-2.504\n" +
                            "                            c-4.425,0.469-7.24,5.95-9.502,9.018c-6.911-1.33-10.519,6.1-15.505,7.517c-3.768,1.064-6.524,0.153-10.006-2.003\n" +
                            "                            c-4.541,0.436-7.479,0.978-11.509,3.007c-1.735,0.881-3.476,2.604-5.501,3.508c-2.961,1.312-4.986,1.096-7.001,2.504\n" +
                            "                            c-4.943,3.474-6.438,10.107-9.004,16.025c-5.87,3.767-15.207,4.396-23.008,7.016c-2.126,0.712-4.683,3.295-7.002,3.507\n" +
                            "                            c-2.521,0.229-4.793-2.229-7.002-2.004c-5.07,0.521-7.543,9.131-12.003,11.521c-2.162,1.155-7.208,1.521-8.504,2.003\n" +
                            "                            c-5.607,2.097-7.771,8.729-12.002,5.512c-3.229-2.452,0.963-1.812,0-5.011c-3.312-6.299-11.479-2.585-11.005,4.51\n" +
                            "                            c-1.146,2.937-5.52,4.006-6.006,7.515c-0.521,3.771,3.931,7.834,4.003,11.521c0.062,3.202-4.349,7.111-4.503,11.021\n" +
                            "                            c-0.146,3.517,2.3,6.271,2.003,8.52c-0.396,2.979-3.939,4.812-7.505,7.015c-3.022,1.87-6.571,4.827-9.508,4.508\n" +
                            "                            c-2.146-0.229-7.596-5.883-10.003-8.515c-20.22-22.121-42.182-44.84-62.52-65.617c-12.694-12.973-24.337-25.374-36.017-37.066\n" +
                            "                            c-9.088-9.1-17.758-18.783-27.009-28.05c-1.434-1.437-3.137-3.023-4.501-4.509c-1.271-1.38-2.987-3.097-3.002-5.01\n" +
                            "                            C429.688,290.824,548.8,229.874,667.245,166.77c8.312-4.429,16.646-9.224,25.009-13.524c8.531-4.387,17.422-8.181,25.514-13.024\n" +
                            "                            c3.896-2.332,17.241-1.002,25.01-1.002C796.854,139.192,849.98,139.208,903.339,139.192z"
                    }
                ]
            };

            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload) {

        state.regions = [];

        // first add any regions that were sent in via the constructor
        if(this.data){
            this.data.forEach( region => {
                state.regions.push(new Region(region));
            });
        };

        // then add any regions that were fetched during the onDispatch action
        payload.data.forEach(region => {
            state.regions.push(new Region(region));
        });
    }
}

