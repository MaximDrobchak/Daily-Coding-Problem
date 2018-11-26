import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import PasswordForgetForm from './PasswordForgetForm';

const PasswordForget = () => (
	<div>
		<h1>PasswordForget</h1>
		<PasswordForgetForm />
	</div>
);

export const PasswordForgetLink = () => (
	<p>
		<Link to={routes.PASSWORD_FORGET}>Forgot Password</Link>
	</p>
);

export default PasswordForget;
