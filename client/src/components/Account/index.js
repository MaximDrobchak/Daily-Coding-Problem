import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget/PasswordForgetForm';
import withAuthorization from '../Session/withAuthorization';

const AccountComponent = ({ authUser }) => (
	<div>
		<h1>Account: {authUser.email}</h1>
		{PasswordChangeForm ? (
			<PasswordChangeForm />
		) : (
			<PasswordForgetForm />
		)}
	</div>
);

const mapStateToProps = state => ({
	authUser: state.sessionState.authUser,
});

const authCondition = authUser => !!authUser;

const Account = compose(
	withAuthorization(authCondition),
	withRouter,
	connect(mapStateToProps),
)(AccountComponent);

export default Account;
