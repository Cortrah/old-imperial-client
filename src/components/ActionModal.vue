<template>
	<el-dialog title="Leader Action"
			   :visible.sync="dialogFormVisible">

		<el-form :model="modalData" :inline="true" >

			<el-form-item label="Action Type" :label-width="formLabelWidth" >
				<el-select v-model="modalData.actionType"
						   placeholder="select an action type"
						   value-key="code"
						   @change="handleChange" >
						<el-option v-for="actionType in $store.state.static.leaderActionTypes"
								   :key="actionType.code"
								   :label="actionType.name"
								   :value="actionType.code">
						</el-option>
				</el-select>
			</el-form-item>

			<el-form-item :label-width="formLabelWidth">
				<el-select v-model="modalData.actionSubType"
						   placeholder="detail"
						   value-key="code"
						   @change="handleChange" >
					<el-option v-for="actionSubType in $store.getters.getLeaderActionSubTypes(modalData.actionType)"
							   :key="actionSubType.code"
							   :label="actionSubType.name"
							   :value="actionSubType.code">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="Conditionals" :label-width="formLabelWidth">
				<el-switch
						v-model="hasConditionals"
						active-color="#13ce66"
						inactive-color="#ff4949">
				</el-switch>
			</el-form-item>

			<el-form-item label="Secret" :label-width="formLabelWidth">
				<el-checkbox v-model="modalData.isSecret"></el-checkbox>
			</el-form-item>
		</el-form>

		<el-form :model="modalData">
			<el-form-item label="Note" :label-width="formLabelWidth">
				<el-input type="textarea" v-model="modalData.note" autocomplete="off"></el-input>
			</el-form-item>


			<el-form-item v-if="getActionType() == 'tr'" label="Transfering" :label-width="formLabelWidth">
				<el-transfer
						v-model="transferables"
						:data="transfering"
						:titles="['Source', 'Target']">
				</el-transfer>
			</el-form-item>

			<el-form-item label="Costs" :label-width="formLabelWidth">
				<el-form :inline="true" label-position="top">
					<el-form-item label="Mp" >
						<el-input-number v-model="modalData.mp" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
					<el-form-item label="Gp" >
						<el-input-number v-model="modalData.gp" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
					<el-form-item label="Ap" >
						<el-input-number v-model="modalData.ap" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
					<el-form-item label="Nfp">
						<el-input-number v-model="modalData.nfp" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
					<el-form-item label="Sfp">
						<el-input-number v-model="modalData.nfp" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
					<el-form-item label="Mana" >
						<el-input-number v-model="modalData.mana" controls-position="right" @change="handleChange" :min="0"></el-input-number>
					</el-form-item>
				</el-form>
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
                formLabelWidth: '120px',
				showDetails: false,
				hasConditionals: false,
				transferables: [
					{
						key: 1,
						label: "One",
						disabled: false
					},
					{
						key: 2,
						label: "Two",
						disabled: false
					},
					{
						key: 3,
						label: "Three",
						disabled: false
					},
				],
				transfering: [
					{
						key: 4,
						label: "A",
						disabled: false
					},
					{
						key: 5,
						label: "B",
						disabled: false
					},
					{
						key: 6,
						label: "C",
						disabled: false
					},
				],
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
			},

			getActionType() {
				return this.modalData.actionType;
			},

			handleChange(e) {
				console.log(this.$store.getters.getLeaderActionSubTypes(this.modalData.actionType));
				console.log(e);
			}
		}
	}
</script>
<style scoped>
	.el-input-number {
		max-width: 100px;
	}
</style>
