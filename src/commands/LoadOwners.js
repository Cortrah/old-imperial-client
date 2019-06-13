import Command from "./Command";
// import Owner from "../domain/Owner";
// import {getOwners} from "../api/OwnerHttp";

export default class LoadOwners extends Command{

    constructor(data) {
        super('LoadOwners', data);
    }

    // actions
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await getOwners()
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
                    new Owner({
                        "id": '20',
                        "name": "E2E_TEST_OWNER",
                        "dateCreated": 1539835200000,
                        "createdBy": "cwinters",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '666',
                                "apiKey": "ARCHIVED-TEST-KEY",
                                "dateCreated": 1525124713000,
                                "createdBy": "cwinters",
                                "dateArchived": 1540904866000,
                                "archivedBy": "anonymousUser"
                            },
                            {
                                "id": '6',
                                "apiKey": "TEST-KEY",
                                "dateCreated": 1525124713000,
                                "createdBy": "cwinters",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ],
                        "ownerUsers": [
                            {
                                "id": '22',
                                "userId": "gzappen",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '20',
                                "userId": "cludwin",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '21',
                                "userId": "cwinters",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '23',
                                "userId": "mpanzer",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '24',
                                "userId": "myudin",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '7',
                        "name": "OWNER_SERVICE",
                        "dateCreated": 1539835200000,
                        "createdBy": "cludwin",
                        "dateArchived": 1539835200000,
                        "archivedBy": "cludwin",
                        "apiKeys": [],
                        "ownerUsers": [
                            {
                                "id": '22',
                                "userId": "gzappen",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '20',
                                "userId": "cludwin",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id":'21',
                                "userId": "cwinters",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '23',
                                "userId": "mpanzer",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '24',
                                "userId": "myudin",
                                "dateCreated": 1539835200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '1',
                        "name": "OP",
                        "dateCreated": 1455744691000,
                        "createdBy": "myudin",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '3',
                                "apiKey": "mBosdf000ZZaviv23JJJmmbooQB",
                                "dateCreated": 1455685200000,
                                "createdBy": "myudin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '1',
                                "apiKey": "SUPERSECRETNYSEDKEY",
                                "dateCreated": 1455744711000,
                                "createdBy": "myudin",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ],
                        "ownerUsers": [
                            {
                                "id": '10',
                                "userId": "cwinters",
                                "dateCreated": 1525998187000,
                                "createdBy": "gzappen",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '64',
                                "userId": "cludwin",
                                "dateCreated": 1543381200000,
                                "createdBy": "cludwin",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '2',
                                "userId": "gzappen",
                                "dateCreated": 1520295239000,
                                "createdBy": "gzappen",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '13',
                                "userId": "dgresen",
                                "dateCreated": 1526943511000,
                                "createdBy": "dhammerl",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '12',
                                "userId": "myudin",
                                "dateCreated": 1526491257000,
                                "createdBy": "myudin",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '6',
                        "name": "REPORTING_SERVICE",
                        "dateCreated": 1525124684000,
                        "createdBy": "myudin",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '6',
                                "apiKey": "TEST-KEY",
                                "dateCreated": 1525124713000,
                                "createdBy": "cludwin",
                                "dateArchived": 1540904866000,
                                "archivedBy": "anonymousUser"
                            },
                            {
                                "id": '5',
                                "apiKey": "REPORTING_SERVICE_DEV_KEY",
                                "dateCreated": 1525124713000,
                                "createdBy": "myudin",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ],
                        "ownerUsers": [
                            {
                                "id": '19',
                                "userId": "gzappen",
                                "dateCreated": 1534353593000,
                                "createdBy": "gzappen",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '9',
                                "userId": "dhammerl",
                                "dateCreated": 1525752000000,
                                "createdBy": "gzappen",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '18',
                                "userId": "dgresen",
                                "dateCreated": 1526443200000,
                                "createdBy": "dhammerl",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    })
                ]
            };
            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload) {
        state.owners = [];
        // first add any owners that were sent in via the constructor
        this.data.forEach(owner => {
            state.owners.push(new Owner(owner));
        });
        // then add any owners that were fetched during the onDispatch action
        payload.results.data.forEach(owner => {
            state.owners.push(new Owner(owner));
        });
    }
}

