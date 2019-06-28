import Command from "./Command";
import Region from "../domain/Region";
import {getRegions} from "../api/RegionHttp";

export default class LoadRegions extends Command{

    constructor(data) {
        super('LoadRegions', data);
    }

    // actions
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await getRegions()
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            let mockResponse = {
                data:[
                    new Region(),
                ]
            };
            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload) {
        state.regions = [];
        // first add any regions that were sent in via the constructor
        this.data.forEach( region => {
            state.regions.push(new Region(region));
        });
        // then add any regions that were fetched during the onDispatch action
        payload.results.data.forEach(region => {
            state.regions.push(new Region(region));
        });
    }
}

