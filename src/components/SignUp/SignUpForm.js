import React, { Component } from 'react';
import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase';
import { propKey } from '../PasswordChange';

const INITIAL_STATE = {
	email: '',
	error: null,
	passwordOne: '',
	passwordTwo: '',
	username: '',
};

class SignUpForm extends Component {
	state = { ...INITIAL_STATE };

	onSubmit = e => {
		e.preventDefault();

		const { email, passwordOne, username } = this.state;
		const { history } = this.props;

		auth.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				// Create a user in your own accessible Firebase Database too
				db.doCreateUser(authUser.user.uid, username, email)
					.then(() => {
						this.setState(() => ({ ...INITIAL_STATE }));
						history.push(routes.HOME);
					})
					.catch(error => {
						this.setState(propKey('error', error));
					});
			})
			.catch(error => {
				this.setState(propKey('error', error));
			});
	};

	setStateWithEvent = (e, columnType) =>
		this.setState(propKey(columnType, e.target.value));

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';

		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					value={username}
					onChange={e =>
						this.setStateWithEvent(e, 'username')
					}
					type="text"
					placeholder="Full Name"
				/>
				<input
					value={email}
					onChange={e => this.setStateWithEvent(e, 'email')}
					type="text"
					placeholder="Email Address"
				/>
				<input
					value={passwordOne}
					onChange={e =>
						this.setStateWithEvent(e, 'passwordOne')
					}
					type="password"
					placeholder="Password"
				/>
				<input
					value={passwordTwo}
					onChange={e =>
						this.setStateWithEvent(e, 'passwordTwo')
					}
					type="password"
					placeholder="Confirm Password"
				/>
				<button disabled={isInvalid} type="submit">
					Sign Up
				</button>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

export default SignUpForm;
