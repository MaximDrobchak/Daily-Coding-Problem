import React from 'react';
import { withRouter } from 'react-router-dom';

import { PasswordForgetLink } from './../PasswordForget';
import { SignUpLink } from '../SignUp';
import SignInForm from './SignInForm';

const SignInComponent = ({ history }) => (
	<div>
		<h1>SignIn</h1>
		<SignInForm history={history} />
		<SignUpLink />
		<PasswordForgetLink />
	</div>
);

const SignIn = withRouter(SignInComponent);

export default SignIn;
