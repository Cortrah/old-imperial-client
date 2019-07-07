let defaults = {
    id : '',
    name: "",
    label: "",
    tooltip: "",
    description: "",
    notes: "",
    cellType: "Location",
    icon: "./img/glyphs/gate.png",
    pathFill: '#F5F5F5',
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    cX: 15,
    cY: 15,
    pathData: `m0,0 L30,0 L30,30 L0,30 z`,
};


export default class Location {

    constructor(options) {
        if (options != null) {
            this.id = options.id || "";
            this.name = options.name || "";
            this.label = options.label || "";
            this.tooltip = options.tooltip || "a location";
            this.description = options.description || "";
            this.notes = options.notes || "";
            this.cellType = "Location";
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
                width: this.w, height: this.h
            },
            attrs: {
                cellType: "Location",
                root: {
                    title: this.tooltip
                },
                image: {
                    xlinkHref: this.icon,
                },
            }
        }
    }
}

