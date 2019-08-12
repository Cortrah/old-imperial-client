<template>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <h1>
                    {{
                        $store.getters.currentTurn().narratives[0].title
                    }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </h1>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  v-for="narrative in $store.state.game.turns[0].narratives"
                                   :key="narrative.id"
                                   :icon="narrative.icon">
                    {{ narrative.title}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-button-group style="padding-left: 40px">
            <el-button type="default" icon="el-icon-caret-left" size="mini" round></el-button>
            <el-button type="default" icon="el-icon-caret-right" size="mini" round></el-button>
        </el-button-group>

        <p>
            {{ $store.getters.currentTurn().narratives[0].body}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "MainNarrative"
    }
</script>

<style scoped>
</style>
