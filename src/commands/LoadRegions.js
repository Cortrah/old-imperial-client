import Command from "./Command";
import Region from "../domain/Region";
import {getRegions} from "../api/RegionHttp";

export default class LoadRegions extends Command{

    constructor(data) {
        super('LoadRegions', data);
    }

    // actions
    async onDispatch(context, action) {
        console.log("loading regions dispatched");
        if(context.state.isServerLive){
            console.log("live");
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
            console.log("simulated");
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
        if(this.data){
            this.data.forEach( region => {
                state.regions.push(new Region(region));
            });
        };

        // then add any regions that were fetched during the onDispatch action
        payload.data.forEach(region => {
            state.regions.push(new Region(region));
        });
    }
}

