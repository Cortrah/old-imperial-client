<template>
	<el-dialog title="Leader Action"
			   :visible.sync="dialogFormVisible">

		<el-form :model="modalData">

			<el-form-item label="Action Type" :label-width="formLabelWidth">
				<el-select v-model="modalData.actionType" placeholder="select an action type">
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
				<el-input v-model="modalData.note" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">Cancel</el-button>
			<el-button type="primary" @click="addLeaderAction()">Confirm</el-button>
	  	</span>

	</el-dialog>
</template>

<script>
	import AddLeaderAction from "../commands/AddLeaderAction";

    export default {
        name: "ActionModal",
		props: {
        	modalData: {
				type: Object,
				required: true,
			}
		},
        data() {
            return {
                dialogFormVisible: true,
                formLabelWidth: '120px'
            };
        },
		methods: {

        	addLeaderAction() {
				this.$store.dispatch(
						{
							type:'onDispatch',
							command: new AddLeaderAction()
						}
				).then(
						result => {
							// all's well
							// console.log('Initial loading of regions succeeded');
						}
				).catch(
						error => {
							console.log(error);
							// console.log('Initial loading of region data failed');
						}
				);
				this.dialogFormVisible = false;
			}
		}
	}
</script>
