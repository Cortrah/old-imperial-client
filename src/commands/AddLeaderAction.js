import Command from "./Command";

export default class AddLeaderAction extends Command{

    constructor(data) {
        super('AddLeaderAction', data);
    }

    // action
    async onDispatch(context, action){
        //console.log(this.name + ' command dispatched');
        return await context.commit('do', {action: action, results: null});
    }

    // mutation
    do(state, payload){
        // console.log(state);
        // console.log('goto payload');
        // console.log(payload);
        // console.log(payload.action);
        // console.log(payload.results);
        // console.log(this.data);
        return state.leaderActions[state.leaderActions.length-1].items.push({
            id: 8,
            name: "New Act",
            groupId: 3
        });
    }
}

