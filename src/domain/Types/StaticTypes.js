import LeaderActionType from "./LeaderActionType";
import Spell from "./Spell";

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
                code: "rs",
                description: "Research a conceptualized or historically known spell.",
            },
            {
                name: "Cast Spell",
                code: "cast",
                description: "Cast a spell, can be with other leaders in which case one needs to be the primary caster.",
            },
            {
                name: "Manufacture Spell Crystal",
                code: "mn",
                description: "Create a spell crystal, can be blank or a minor spell. Can be a major spell if another copy is present.",
            },
            {
                name: "Learn Spell",
                code: "ls",
                description: "Learn a spell from another leader who knows it. Becomes available for all leaders in your realm on the following turn.",
            },
            {
                name: "Devise Spell",
                code: "ds",
                description: "Conceptualize a spell to be researched. Often takes many iterations and the results may still not be perfect.",
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

export const spells = [
    new Spell({
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
    }),
];

