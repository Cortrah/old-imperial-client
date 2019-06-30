let defaults = {
    id : '',
    pathId: '',
    name: "",
    label: "",
    tooltip: "",
    description: "",
    notes: "",
    turn: null,
    realm: null,
    allegiance: null,
    resistance: 3,
    kindred: null,
    terrain: null,
    religion: null,
    statuses: null,
    features: null,
    constructs: null,
    locations: [],
    majorMap: null,
    gp: 0,
    ap: 0,
    nfp: 0,
    mana: 0,
    pwb: 0,
    tv: 0,
    hasRoad: false,
    isSecret: false,
    bordersVolcano: false,
    isInimical: false,
    cellType: "Region",
    pathFill: '#F5F5F5',
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    cX: 50,
    cY: 50,
    pathData: `m0,0 L100,0 L100,100 L0,100 z`,
};


export default class Region {

    constructor(options) {
        if (options != null) {
            this.id = options.id || null;
            this.pathId = options.pathId || null;
            this.name = options.name || "Takohn";
            this.cellType = "Region";
            this.pathFill = "#737144";
            this.tooltip = "Toolie magoulie";
            this.pathData = `M704.271,249.39c2.066,2.598,3.596,5.747,6.503,7.513c5.604-0.062,11.917,0.58,15.505-1.503
                        c2.272,0.268,1.658,2.26,2.5,3.506c1.213,1.797,3.498,2.824,4.502,5.009c1.618,3.522-0.062,7.666,1,11.521
                        c1.031,3.751,5.7,5.039,7.002,8.013c0.45,2.061-0.59,4.185,0,6.511c0.892,3.519,7.264,5.153,8.002,9.018
                        c0.246,1.283-0.699,2.299-1,4.007c-0.757,4.303,0.168,7.935-2.5,10.521c-1.016,4.561,0.979,7.686,1.5,11.02
                        c0.27,1.729-0.375,3.669,0,5.009c0.578,2.064,2.741,3.516,3,5.512c0.447,3.418-2.986,11.014-4.5,13.021
                        c0.284,6.297-2.838,9.183-3.001,15.027c-4.927-0.758-7.486,0.851-9.003,3.506c-3,0-6.003,0-9.004,0
                        c-3.742-2.287-2.574-6.918-4.001-10.519c-1.79-4.519-7.006-6.604-9.502-10.021c-1.501,0-3.002,0-4.502,0
                        c-1.822-4.02-5.449-6.229-7.503-10.019c-10.562-0.777-13.388-9.311-22.014-12.021c-0.512-2.942-0.056-6.038-0.501-9.016
                        c-0.182-1.224-1.141-2.841-1-4.007c0.483-3.997,5.247-5.35,3.502-12.523c9.288-6.894,17.938-14.427,24.016-24.544
                        c-0.494-4.015,0.681-6.363,0-9.518c-0.729-3.356-3.53-4.55-3.501-7.012C699.816,253.563,703.552,254.01,704.271,249.39z`;
            this.locations = [];
            if(options.hasOwnProperty('locations')&& options.locations !== null) {
                options.locations.forEach(item => {
                    let location = new Location(item);
                    this.locations.push(apiKey);
                })
            }
        } else {
            // use defaults
            this.id = defaults.id;
            this.pathId = defaults.pathId;
            this.name = defaults.name;
            this.cellType = defaults.cellType;
            this.pathFill = defaults.pathFill;
            this.tooltip = defaults.tooltip;
            this.pathData = defaults.pathData;
            this.locations = defaults.locations;
        }
    }

    getMock() {
        return this.defaults;
    }
}
// position: { x: 100, y: 100 },
// size: { width: 75, height: 117 },
// attrs: {
//     pathId: '_x33_0',
//     regionId: 247,
//     cellType: "Region",
//     pathFill: '#737144',
//     tooltip: "Place of the innumerable Ghoulfarb Fullsuit",
//     body: {
//     refD: `M704.271,249.39c2.066,2.598,3.596,5.747,6.503,7.513c5.604-0.062,11.917,0.58,15.505-1.503
//                         c2.272,0.268,1.658,2.26,2.5,3.506c1.213,1.797,3.498,2.824,4.502,5.009c1.618,3.522-0.062,7.666,1,11.521
//                         c1.031,3.751,5.7,5.039,7.002,8.013c0.45,2.061-0.59,4.185,0,6.511c0.892,3.519,7.264,5.153,8.002,9.018
//                         c0.246,1.283-0.699,2.299-1,4.007c-0.757,4.303,0.168,7.935-2.5,10.521c-1.016,4.561,0.979,7.686,1.5,11.02
//                         c0.27,1.729-0.375,3.669,0,5.009c0.578,2.064,2.741,3.516,3,5.512c0.447,3.418-2.986,11.014-4.5,13.021
//                         c0.284,6.297-2.838,9.183-3.001,15.027c-4.927-0.758-7.486,0.851-9.003,3.506c-3,0-6.003,0-9.004,0
//                         c-3.742-2.287-2.574-6.918-4.001-10.519c-1.79-4.519-7.006-6.604-9.502-10.021c-1.501,0-3.002,0-4.502,0
//                         c-1.822-4.02-5.449-6.229-7.503-10.019c-10.562-0.777-13.388-9.311-22.014-12.021c-0.512-2.942-0.056-6.038-0.501-9.016
//                         c-0.182-1.224-1.141-2.841-1-4.007c0.483-3.997,5.247-5.35,3.502-12.523c9.288-6.894,17.938-14.427,24.016-24.544
//                         c-0.494-4.015,0.681-6.363,0-9.518c-0.729-3.356-3.53-4.55-3.501-7.012C699.816,253.563,703.552,254.01,704.271,249.39z`
//     },
//     label: {
//         text: '★\n' + 'Takohn\n (4331)i\n⚁'
//     }
// }
