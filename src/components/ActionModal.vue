<template>
	<el-dialog title="Leader Action"
			   :visible.sync="dialogFormVisible">

		<el-form :model="formData">

			<el-form-item label="Action Type" :label-width="formLabelWidth">
				<el-select v-model="formData.actionType" placeholder="select an action type">
					<el-option label="Movement" value="mv"></el-option>
					<el-option label="Exchange" value="ex"></el-option>
					<el-option label="Diplomacy" value="dp"></el-option>
					<el-option label="Intelligence" value="int"></el-option>
					<el-option label="Combat" value="cb"></el-option>
					<el-option label="Magic" value="ma"></el-option>
					<el-option label="Conditional" value="cond"></el-option>
					<el-option label="Note" value="note"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="Note" :label-width="formLabelWidth">
				<el-input v-model="formData.note" autocomplete="off"></el-input>
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
				formData: {
					actionType: 'mv',
                    note: '',
                },
                formLabelWidth: '120px'
            };
        }
    }
</script>
