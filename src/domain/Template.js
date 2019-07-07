let defaults = {
    id : '',
    name: "",
    code: "",
    description: "",
    items: []
};


export default class BorderType {

    constructor(options) {
        if (options != null) {
            this.id = options.id || "";
            this.name = options.name || "";
            this.code = options.code || "";
            this.description = options.description || "";
            this.items = [];
            if(options.hasOwnProperty('items') && options.items !== null) {
                options.items.forEach( itemData => {
                    //this.items.push(new Item(itemData));
                })
            }
        } else {
            // use defaults
            this.id = defaults.id;
            // ...
        }
    }

    getMock() {
        return this.defaults;
    }
}

