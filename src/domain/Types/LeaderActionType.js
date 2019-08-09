let defaults = {
    id : '0',
    name: "",
    code: "",
    description: "A base leader action type",
    subTypes: []
};


export default class LeaderActionType {

    constructor(options) {
        if (options != null) {
            this.id = options.id || defaults.id;
            this.name = options.name || defaults.name;
            this.code = options.code || defaults.code;
            this.description = options.description || defaults.description;
            this.subTypes = [];
            if(options.hasOwnProperty('subTypes') && options.subTypes !== null) {
                options.subTypes.forEach(item => {
                    this.subTypes.push(item);
                })
            }
        } else {
            // use defaults
            this.id = defaults.id;
            this.name = defaults.name;
            this.code = defaults.code;
            this.description = defaults.description;
            this.subTypes = [];
        }
    }
}

