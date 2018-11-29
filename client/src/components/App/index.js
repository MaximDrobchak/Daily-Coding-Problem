import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { firebase } from '../../firebase';
import Account from '../Account';
import Home from '../Home';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PasswordForget from '../PasswordForget';
import withAuthentication from '../Session/withAuthentication';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import Microsoft from '../Microsoft';
import Facebook from '../Facebook';
import Google from '../Google';

class AppComponent extends Component {
	state = {
		authUser: null,
	};

	componentDidMount() {
		firebase.auth.onAuthStateChanged(authUser =>
			authUser
				? this.setState(() => ({ authUser }))
				: this.setState(() => ({ authUser: null })),
		);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />

					<Switch>
						<Route
							exact
							path={routes.LANDING}
							component={Landing}
						/>
						<Route
							exact
							path={routes.SIGN_IN}
							component={SignIn}
						/>
						<Route
							exact
							path={routes.SIGN_UP}
							component={SignUp}
						/>
						<Route
							exact
							path={routes.PASSWORD_FORGET}
							component={PasswordForget}
						/>
						<Route
							exact
							path={routes.HOME}
							component={Home}
						/>
						<Route
							exact
							path={routes.ACCOUNT}
							component={Account}
						/>
						<Route
							exact
							path={routes.MICROSOFT}
							component={Microsoft}
						/>
						<Route
							exact
							path={routes.FACEBOOK}
							component={Facebook}
						/>
						<Route
							exact
							path={routes.GOOGLE}
							component={Google}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
const App = withAuthentication(AppComponent);

export default App;
