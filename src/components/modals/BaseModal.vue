<template>
	<el-dialog title="Base Modal"
			   :visible.sync="dialogFormVisible">

		<el-form :model="modalData" :rules="rules" ref="noteForm">
			<el-form-item label="Note" prop="note" :label-width="formLabelWidth">
				<el-input id="noteInput"
						  type="text"
						  v-model="modalData.note"
					      autocomplete="off">
				</el-input>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button @click="resetForm('noteForm')">
				Cancel
			</el-button>
			<el-button type="primary" @click="submitForm('noteForm')">
				Confirm
			</el-button>
	  	</span>

	</el-dialog>
</template>

<script>
    export default {
        name: "BaseModal",
		props: {
        	modalData: {
				type: Object,
				required: true,
			},
			i: 0
		},
        data() {
            return {
                dialogFormVisible: true,
                formLabelWidth: '120px',
				ruleForm: {
					note: '',
				},
				rules: {
					note: [
						{required: true, message: 'A Note is Required', trigger: 'blur'},
					],
				}
            };
        },
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// submit it
						this.dialogFormVisible = false;
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
				// send a close modal event message with the index so it can be removed from the list.
				// have that modal list in the store
				this.dialogFormVisible = false;
			}
		}
	}
</script>
