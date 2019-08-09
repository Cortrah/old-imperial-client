let defaults = {
    id : '0',
    name: "Adjacent",
    code: ":",
    description: "The default border between two regions",
    landCost: 0,
    airCost: 0,
    navalCost: 0,
    manaCost: 0,
    isDirectional: false,
};


export default class BorderType {

    constructor(options) {
        if (options != null) {
            this.id = options.id || defaults.id;
            this.name = options.name || defaults.name;
            this.code = options.code || defaults.code;
            this.description = options.description || defaults.description;
            this.landCost = options.landCost || defaults.landCost;
            this.airCost = options.airCost || defaults.airCost;
            this.navalCost = options.navalCost || defaults.navalCost;
            this.manaCost = options.manaCost || defaults.manaCost;
            this.isDirectional = options.isDirectional || defaults.isDirectional;
        } else {
            // use defaults
            this.id = defaults.id;
            this.name = defaults.name;
            this.code = defaults.code;
            this.description = defaults.description;
            this.landCost = defaults.landCost;
            this.airCost =  defaults.airCost;
            this.navalCost = defaults.navalCost;
            this.manaCost =  defaults.manaCost;
            this.isDirectional = defaults.isDirectional;
        }
    }

    getMock() {
        return this.defaults;
    }
}

