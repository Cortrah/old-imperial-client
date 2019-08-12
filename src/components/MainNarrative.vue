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
                    <el-dropdown-item icon="el-icon-reading">Sahul Chronical</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-notebook-2">Tokatl Times</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-notebook-1">Lord Fumblies Diary</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-chat-line-square">Agora</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        <br/>
        {{ $store.getters.currentTurn().narratives[0].body}}
    </div>
</template>

<script>
    export default {
        name: "MainNarrative"
    }
</script>

<style scoped>
</style>
