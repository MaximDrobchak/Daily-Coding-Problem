import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import SignUoForm from './SignUpForm';
import * as routes from '../../constants/routes';

const SignUpPage = () => (
	<div>
		<h1>SignUp</h1>
		<SignUoForm />
	</div>
);

const SignUpLink = () => (
	<p>
		Don't have an account?{' '}
		<Link to={routes.SIGN_UP}>Sign Up</Link>
	</p>
);

export default SignUpPage;

export { SignUoForm, SignUpLink };
