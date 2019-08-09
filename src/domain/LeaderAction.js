let defaults = {
    id : '0',
    name: "",
    code: ":",
    description: "",
    gpCost: 0,
    apCost: 0,
    npfCost: 0,
    spfCost: 0,
    manaCost: 0,
    totalManaCost: 0,
    movementType: null,
    movementCost: 0,
    leaderActionType: null,
    majorMap: null,
    region: null,
    atLocation: null,
    toLocation: null,
    otherLocation: null,
    usingRoad: false,
    startingPhase: 0,
    isSecret: false,
    isWithOthers: false,
    isPrimaryTarget: true,
    unitType: null,
    unitCount: 0,
    item: null,
    itemType: null,
    defaultResults: "",
    finalResults: "",
    monitorLevel: "Ok"
};


export default class LeaderAction {

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
        }
    }

    getMock() {
        return this.defaults;
    }
}

