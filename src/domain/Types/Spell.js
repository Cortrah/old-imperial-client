let defaults = {
    id: 0,
    name: "Battle Magic",
    code: "bm",
    description: "This spell enhances an army's effectiveness in combat situations.",
    level: 'Minor',
    nsr: 1,
    whenToCast: "Start of Turn",
    timeToCast: 0,
    allowsMultipleCasters: false,
    initialManaCost: 1,
    perUnitManaCost: 1,
    totalManaCost: 1,
    isSecret: false,
};


export default class Spell {

    constructor(options) {
        if (options != null) {
            this.id = options.id || defaults.id;
            this.name = options.name || defaults.name;
            this.code = options.code || defaults.code;
            this.description = options.description || defaults.description;
            this.level = options.level || defaults.level;
            this.nsr = options.nsr || defaults.nsr;
            this.whenToCast = options.whenToCast || defaults.whenToCast;
            this.timeToCast = options.timeToCast || defaults.timeToCast;
            this.allowsMultipleCasters = options.allowsMultipleCasters || defaults.allowsMultipleCasters;
            this.initialManaCost = options.initialManaCost || defaults.initialManaCost;
            this.perUnitManaCost = options.perUnitManaCost || defaults.perUnitManaCost;
            this.totalManaCost = options.totalManaCost || defaults.totalManaCost;
            this.isSecret = options.isSecret || defaults.isSecret;
        } else {

            // use defaults
            this.id = defaults.id;
            this.name = defaults.name;
            this.code = defaults.code;
            this.description = defaults.description;
            this.level = defaults.level;
            this.nsr = defaults.nsr;
            this.whenToCast = defaults.whenToCast;
            this.timeToCast = defaults.timeToCast;
            this.allowsMultipleCasters = defaults.allowsMultipleCasters;
            this.initialManaCost = defaults.initialManaCost;
            this.perUnitManaCost = defaults.perUnitManaCost;
            this.totalManaCost = defaults.totalManaCost;
            this.isSecret = defaults.isSecret;
        }
    }

    getMock() {
        return defaults;
    }
}

