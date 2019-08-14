import Command from "./Command";

export default class Signin extends Command{

    constructor(data) {
        super('Signin', data);
    }

    // action
    async onDispatch(context, action){
        console.log(this.name + ' command dispatched');
        console.log(action);
        return await context.commit('do', {action: action, results: null});
    }

    // mutation
    do(state, payload){
        console.log(state);
        console.log(payload);
        //console.log(payload.action);
        //console.log(payload.results);
        console.log(this.data);
        let paramId = null;
        if(this.data.params){
            paramId = this.data.params.id;
        }
        return state.appView.$router.push({name: this.data.name, params: {id: paramId}});
    }
}

