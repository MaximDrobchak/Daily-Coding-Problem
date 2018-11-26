import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import * as routes from '../../constants/routes';

import './Navigation.scss';

import { SingOutButton } from '../SignOut';

const NavigationComponent = ({ authUser }) => (
	<div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => {
	return (
		<div className="Navigation">
			<ul>
				<li>
					<Link to={routes.LANDING}>Landing</Link>
				</li>
				<li>
					<Link to={routes.HOME}>Home</Link>
				</li>
				<li>
					<Link to={routes.ACCOUNT}>Account</Link>
				</li>
				<li>
					<SingOutButton />
				</li>
			</ul>
		</div>
	);
};

const NavigationNonAuth = () => (
	<div className="Navigation">
		<ul>
			<li>
				<Link to={routes.LANDING}>Landing</Link>
			</li>
			<li>
				<Link to={routes.SIGN_IN}>Sign In</Link>
			</li>
		</ul>
	</div>
);

const mapStateToProps = state => ({
	authUser: state.sessionState.authUser,
});

const Navigation = compose(
	withRouter,
	connect(mapStateToProps),
)(NavigationComponent);

export default Navigation;
