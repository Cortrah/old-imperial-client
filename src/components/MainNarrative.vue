<template>
    <div>
        <el-dropdown @command="narrativeChange">
            <span class="el-dropdown-link">
                <h1 class="darkOnLight">
                    {{
                        $store.getters.currentTurn().narratives[0].title
                    }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </h1>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  v-for="(narrative, index) in $store.state.game.turns[0].narratives"
                                   :key="narrative.id"
                                   :command="index"
                                   :icon="narrative.icon">
                    {{ narrative.title}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-button-group style="padding-left: 40px">
            <el-button type="default" icon="el-icon-caret-left" size="mini" round></el-button>
            <el-button type="default" icon="el-icon-caret-right" size="mini" round></el-button>
        </el-button-group>

        <component :narativeData="$store.getters.currentTurn().narratives[1].body"
                   :is="$store.getters.currentLeftPaneView()">
        </component>
    </div>
</template>

<script>
    import MajorMapNarrative from "./LeftPane/MajorMapNarrative.vue";
    import RealmNarrative from "./LeftPane/RealmNarrative.vue";
    import AgentNarrative from "./LeftPane/AgentNarrative.vue";
    import DiplomaticChannels from "./LeftPane/DiplomaticChannels.vue";
    import GuideBook from "./LeftPane/GuideBook.vue";
    import ImperialGazetteer from "./LeftPane/ImperialGazetteer.vue";
    import ImperialStrengthIndex from "./LeftPane/ImperialStrengthIndex.vue";

    import LeftPaneViewChanged from "../commands/LeftPaneViewChanged";

    export default {
        name: "MainNarrative",
        components: {
            MajorMapNarrative, RealmNarrative, GuideBook, AgentNarrative, DiplomaticChannels, ImperialGazetteer, ImperialStrengthIndex
        },

        data () {
            return {
                currentNarrative: "REalmNarrative",
            }
        },
        methods: {
            narrativeChange(command){
                this.$store.dispatch({
                        type: "onDispatch",
                        command: new LeftPaneViewChanged({newIndex: command})
                    }
                ).then(
                    result => {
                        return result;
                    }
                ).catch(
                    error => {
                        throw error;
                    }
                );
            }
        }
    }
</script>

<style scoped>
</style>
