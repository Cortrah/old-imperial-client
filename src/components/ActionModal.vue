<template>
	<el-dialog title="Leader Action"
			   :visible.sync="dialogFormVisible">

		<el-form :model="form">

			<el-form-item label="Action Type" :label-width="formLabelWidth">
				<el-select v-model="form.actionType" placeholder="select an action type">
					<el-option label="Movement" value="mv"></el-option>
					<el-option label="Exchange" value="ex"></el-option>
					<el-option label="Diplomacy" value="dip"></el-option>
					<el-option label="Inteligence" value="int"></el-option>
					<el-option label="Combat" value="cb"></el-option>
					<el-option label="Magic" value="ma"></el-option>
					<el-option label="Conditional" value="cond"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="Note" :label-width="formLabelWidth">
				<el-input v-model="form.note" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">Cancel</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
	  	</span>

	</el-dialog>
</template>

<script>
    export default {
        name: "ActionModal",
        data() {
            return {
                dialogFormVisible: true,
                form: {
					actionType: 'mv',
                    note: '',
                },
                formLabelWidth: '120px'
            };
        }
    }
</script>
