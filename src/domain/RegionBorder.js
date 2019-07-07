import BorderType from "./BorderType";

let defaults = {
    id : '',
    name: "Source:Sink",
    code: "S:S",
    borderType: new BorderType(),
    source: null,
    sink: null,
    isSecret: false,
};

export default class RegionBorder {

    constructor(options) {
        if (options != null) {
            this.id = options.id || defaults.id;
            this.name = options.name || defaults.name;
            this.code = options.code || defaults.code;
            this.borderType = options.borderType || defaults.borderType;
            this.source = options.source || defaults.source;
            this.sink = options.sink || defaults.sink;
            this.isSecret = options.isSecret || defaults.isSecret;
        } else {
            // use defaults
            this.id = defaults.id;
            this.name = defaults.name;
            this.code = defaults.code;
            this.borderType = defaults.borderType;
            this.source = defaults.source;
            this.sink = defaults.sink;
            this.isSecret = defaults.isSecret;
        }
    }

    getMock() {
        return this.defaults;
    }
}
