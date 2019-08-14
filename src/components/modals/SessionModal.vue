<template>
	<el-dialog title="Sign In"
			   :visible.sync="dialogFormVisible">

		<el-form :model="modalData.formData" :rules="rules" ref="signinForm">

			<el-form-item label="Email" prop="emailInput"
						  :label-width="formLabelWidth">
				<el-input id="email"
						  type="text"
						  v-model="modalData.formData.email"
					      autocomplete="off">
				</el-input>
			</el-form-item>

			<el-form-item label="Password" prop="pwdInput"
						  :label-width="formLabelWidth">
				<el-input id="pwdInput"
						  type="text"
						  v-model="modalData.formData.password"
						  autocomplete="off">
				</el-input>
			</el-form-item>

			<el-form-item prop="rememberMeChk"
						  label=""
						  :label-width="formLabelWidth">
				<el-checkbox id="rememberMeChk"
							 v-model="modalData.formData.rememberMe">
					Remember Me
				</el-checkbox>
			</el-form-item>
		</el-form>

		<span slot="footer" class="dialog-footer">
			<el-button @click="resetForm('signinForm')">
				Cancel
			</el-button>
			<el-button type="primary" @click="submitForm('signinForm')">
				Ok
			</el-button>
	  	</span>

	</el-dialog>
</template>

<script>
	import Signin from '../../commands/Signin';

    export default {
        name: "SessionModal",
		props: {
        	modalData: {
				type: Object,
				required: true,
			},
			modalIndex: 0
		},
        data() {
            return {
                dialogFormVisible: true,
                formLabelWidth: '120px',
				ruleForm: {
					name: 'email',
				},
				rules: {
					email: [
						{required: true, message: 'An email address is Required', trigger: 'blur'},
						{email: true, message: 'Not a valid email address', trigger: 'blur'},
					],
				}
            };
        },
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// submit it
						this.$store.dispatch(
                            {
                                type: 'onDispatch',
                                command: new Signin({
                                    data: this.modalData.formData
                                })
                            }
						).then(
                            result => {
                                this.$notify({
                                    type: 'success',
                                    icon: '',
                                    title: 'Signed In',
                                    content: 'Sign in was successful',
                                    placement: 'bottom-right',
                                    duration: 2000,
                                });
                            }
						).catch(
                            error => {
                                this.$notify({
                                    type: 'danger',
                                    icon: '',
                                    title: 'Error',
                                    content: 'Sign in failed - ' + error,
                                    placement: 'bottom-right',
                                    duration: 0,
                                });
                            }
						);
						this.dialogFormVisible = false;
					} else {
                        this.$notify({
                            type: 'danger',
                            icon: '',
                            title: 'Error',
                            content: 'Validation failed - ' + error,
                            placement: 'bottom-right',
                            duration: 0,
                        });
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
