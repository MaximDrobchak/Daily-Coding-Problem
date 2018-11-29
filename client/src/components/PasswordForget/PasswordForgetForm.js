import React, { Component } from 'react';
import { auth } from '../../firebase';

import { propKey } from '../PasswordChange';
import { Button } from './../Elements';

const INITIAL_STATE = {
	email: '',
	error: null,
};

class PasswordForgetForm extends Component {
	state = { ...INITIAL_STATE };

	onSubmit = e => {
		const { email } = this.state;

		auth.doPasswordReset(email)
			.then(() => this.setState(() => ({ ...INITIAL_STATE })))
			.catch(error => this.setState(propKey('error', error)));

		e.preventDefault();
	};

	setStateWithEvent = (e, columnType) =>
		this.setState(propKey(columnType, e.target.value));

	render() {
		const { email, error } = this.state;

		const isInvalid = email === '';

		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					value={email}
					onChange={e => this.setStateWithEvent(e, 'email')}
					type="text"
					placeholder="Email Address"
				/>
				<br />
				<Button
					color="black"
					disabled={isInvalid}
					type="submit"
				>
					Reset My Password
				</Button>
				<br />

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

export default PasswordForgetForm;
