import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Button } from './../Elements';

const INITIAL_STATE = {
	error: null,
	passwordOne: '',
	passwordTwo: '',
};

export const propKey = (propertyName, value) => ({
	[propertyName]: value,
});

class PasswordChangeForm extends Component {
	state = { ...INITIAL_STATE };

	onSubmit = e => {
		const { passwordOne } = this.state;

		auth.doPasswordUpdate(passwordOne)
			.then(() => this.setState(() => ({ ...INITIAL_STATE })))
			.catch(error => this.setState(propKey('error', error)));

		e.preventDefault();
	};

	setStateWithEvent = (e, columnType) =>
		this.setState(propKey(columnType, e.target.value));

	render() {
		const { passwordOne, passwordTwo, error } = this.state;

		const isInvalid =
			passwordOne !== passwordTwo || passwordOne !== '';
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					value={passwordOne}
					onChange={e =>
						this.setStateWithEvent(e, 'passwordOne')
					}
					type="password"
					placeholder="New Password"
				/>
				<br />

				<input
					value={passwordTwo}
					onChange={e =>
						this.setStateWithEvent(e, 'passwordTwo')
					}
					type="password"
					placeholder="Confirm New Password"
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

export default PasswordChangeForm;
