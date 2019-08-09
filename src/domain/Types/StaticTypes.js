import LeaderActionType from "./LeaderActionType";

export const leaderActionTypes = [
    new LeaderActionType({
        name: "Movement",
        code: "mv",
        description: "",
        subTypes: [
            {
                name: "Land",
                code: "land",
                description: "",
            },
            {
                name: "Sea",
                code: "sea",
                description: "",
            },
            {
                name: "Air",
                code: "air",
                description: "",
            },
            {
                name: "Underground",
                code: "undeground",
                description: "",
            },
            {
                name: "Magic",
                code: "magic",
                description: "",
            }
        ]
    }),
    new LeaderActionType({
        name: "Transfer",
        code: "tr",
        description: "",
        subTypes: [
            {
                name: "Units",
                code: "units",
                description: "",
            },
            {
                name: "Items",
                code: "items",
                description: "",
            },
            {
                name: "Resources",
                code: "resources",
                description: "",
            },
        ]
    }),
    new LeaderActionType({
        name: "Diplomacy",
        code: "di",
        description: "",
        subTypes: [
            {
                name: "Rule",
                code: "rule",
                description: "",
            },
            {
                name: "Diplomacy",
                code: "dp",
                description: "",
            },
            {
                name: "Secret Diplomacy",
                code: "sdp",
                description: "",
            },
        ]
    }),
    new LeaderActionType({
        name: "Intelligence",
        code: "int",
        description: "",
        subTypes: [
            {
                name: "Infiltrate",
                code: "inf",
                description: "",
            },
            {
                name: "Receive Intel",
                code: "ri",
                description: "",
            },
            {
                name: "Assasinate",
                code: "as",
                description: "",
            },
            {
                name: "Counter Intel",
                code: "ci",
                description: "",
            },
            {
                name: "Incite Rebelion",
                code: "ir",
                description: "",
            },
            {
                name: "Kidnap Leader",
                code: "kl",
                description: "",
            },
            {
                name: "Scout",
                code: "sc",
                description: "",
            },
            {
                name: "Search and Excavate",
                code: "s&e",
                description: "",
            },
            {
                name: "Steal Magic",
                code: "sm",
                description: "",
            },
            {
                name: "Subvert Leader",
                code: "sl",
                description: "",
            },
        ]
    }),
    new LeaderActionType({
        name: "Combat",
        code: "cbt",
        description: "",
        subTypes: [
            {
                name: "Protect",
                code: "pr",
                description: "",
            },
            {
                name: "Duel",
                code: "dl",
                description: "",
            },
            {
                name: "Plunder",
                code: "pl",
                description: "",
            },
            {
                name: "Slave Raid",
                code: "sr",
                description: "",
            },
            {
                name: "Attack",
                code: "a",
                description: "",
            },
            {
                name: "Assalt Fortification",
                code: "af",
                description: "",
            },
            {
                name: "Attack for Tribute",
                code: "at",
                description: "Attack to secrure tribute",
            },
            {
                name: "Beseige Fortification",
                code: "bf",
                description: "",
            },
            {
                name: "Blockade",
                code: "bk",
                description: "",
            },
            {
                name: "Genocide",
                code: "gen",
                description: "",
            },
            {
                name: "Respond",
                code: "res",
                description: "",
            },
            {
                name: "Sack",
                code: "sk",
                description: "",
            },
            {
                name: "Defend",
                code: "def",
                description: "",
            },
            {
                name: "Evade",
                code: "ev",
                description: "",
            },
            {
                name: "Loot",
                code: "lt",
                description: "",
            },
            {
                name: "Convert",
                code: "con",
                description: "",
            },
            {
                name: "Pillage",
                code: "pil",
                description: "",
            },
        ]
    }),
    new LeaderActionType({
        name: "Magic",
        code: "ma",
        description: "",
        subTypes: [
            {
                name: "Research Spell",
                code: "research",
                description: "",
            },
            {
                name: "Cast Spell",
                code: "cast",
                description: "",
            },
            {
                name: "Create Spell Crystal",
                code: "mn",
                description: "",
            },
        ]
    }),
    new LeaderActionType({
        name: "Misc",
        code: "mi",
        description: "",
        subTypes: [
            {
                name: "Backstory",
                code: "backstory",
                description: "",
            },
            {
                name: "Narrative",
                code: "narrative",
                description: "",
            },
        ]
    }),
];

