import Location from './Location';

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
    regionBorders: [],
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
            this.name = options.name || "";
            this.cellType = "Region";
            this.pathFill = "#f5f5f5";
            this.tooltip = options.tooltip || defaults.tooltip;
            this.pathData = options.pathData || defaults.pathData;
            this.x = options.x || defaults.x;
            this.y = options.y || defaults.y;
            this.w = options.w || defaults.w;
            this.h = options.h || defaults.h;
            this.locations = [];
            if(options.hasOwnProperty('locations') && options.locations !== null) {
                options.locations.forEach(item => {
                    let location = new Location(item);
                    this.locations.push(location);
                })
            }
            this.regionBorders = [];
            if(options.hasOwnProperty('regionBorders') && options.regionBorders !== null) {
                options.regionBorders.forEach(item => {
                    let regionBorder = new RegionBorder(item);
                    this.locations.push(regionBorder);
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
            this.regionBorders = defaults.regionBorders;
        }
    }

    getMock() {
        return this.defaults;
    }

    getJointView() {
        return {
            position: { x: this.x, y: this.y },
            size: { width: this.w, height: this.h },
            attrs: {
                pathId: this.pathId,
                regionId: this.id,
                cellType: "Region",
                pathFill: this.tooltip,
                body: {
                    refD: this.pathData
                },
                label: {
                    text: '★\n' + this.name + '\n (4331)i\n⚁'
                }
            }
        }
    }

}

