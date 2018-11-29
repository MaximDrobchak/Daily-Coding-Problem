import React, { Component } from 'react';
import { auth } from '../../firebase';

import * as routes from '../../constants/routes';
import { propKey } from './../PasswordChange';
import { Button } from './../Elements';

const INITIAL_STATE = {
	email: '',
	error: null,
	password: '',
};

class SignInForm extends Component {
	state = { ...INITIAL_STATE };

	onSubmit = e => {
		const { email, password } = this.state;

		const { history } = this.props;

		auth.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push(routes.HOME);
			})
			.catch(error => this.setState(propKey('error', error)));

		e.preventDefault();
	};

	setStateWithEvent = (e, columnType) =>
		this.setState(propKey(columnType, e.target.value));

	render() {
		const { email, password, error } = this.state;

		const isInvalid = email === '' || password === '';

		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					value={email}
					onChange={e => this.setStateWithEvent(e, 'email')}
					type="text"
					placeholder="Email Address"
				/>{' '}
				<br />
				<input
					value={password}
					onChange={e =>
						this.setStateWithEvent(e, 'password')
					}
					type="password"
					placeholder="Password"
				/>
				<br />
				<Button
					color="black"
					disabled={isInvalid}
					type="submit"
				>
					Sign In
				</Button>
				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

export default SignInForm;
