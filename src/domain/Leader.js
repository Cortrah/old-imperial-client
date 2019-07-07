let defaults = {
    id : '',
    name: "",
    label: "",
    description: "",
    notes: "",
    cellType: "Leader",
    items: [],
    unitTypeGroups: [],
    pathFill: '#F5F5F5',
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    pathData: `m0,0 L30,0 L30,30 L0,30 z`,
};


export default class Leader {

    constructor(options) {
        if (options != null) {
            this.id = options.id || "";
            this.name = options.name || "";
            this.label = options.label || "";
            this.description = options.description || "";
            this.notes = options.notes || "";
            this.cellType = "Leader";
            this.items = [];
            if(options.hasOwnProperty('items') && options.items !== null) {
                options.items.forEach(item => {
                    // let leaderItem = new Item(item);
                    // this.items.push(leaderItem);
                })
            }
            this.pathFill = "#737144";
            this.icon = options.icon || defaults.icon;
            this.x = options.x || defaults.x;
            this.y = options.y || defaults.y;
            this.w = options.w || defaults.w;
            this.h = options.h || defaults.h;
            this.pathData = `m0,0 L30,0 L30,30 L0,30 z`;
        } else {
            // use defaults
            this.id = defaults.id;
            // ...
        }
    }

    getMock() {
        return this.defaults;
    }

    getJointView() {
        return {
            position: {
                x: this.x,
                y: this.y
            },
            size: {
                width: this.w,
                height: this.h
            },
            attrs: {
                cellType: "Leader",
                label: {
                    text: this.label
                },
                body: {
                    refD: this.pathData,
                },
            }
        }
    }
}

