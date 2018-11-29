import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import * as actionType from '../../constants/actionsType';
import { db } from '../../firebase';
import withAuthorization from '../Session/withAuthorization';
import UserList from './UserList';

class HomeComponent extends Component {
	componentDidMount() {
		const { onSetUsers } = this.props;

		db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
	}

	render() {
		const { users } = this.props;

		return (
			<div>
				<h1>Home</h1>
				<p>
					The Home Page is accessible by every signed in
					user.
				</p>

				{!!users && <UserList users={users} />}
			</div>
		);
	}
}

const mapSetToProps = state => ({
	users: state.userState.user,
});

const mapDispatchToProps = dispatch => ({
	onSetUsers: users =>
		dispatch({ type: actionType.USERS_SET, users }),
});

const authCondition = authUser => !!authUser;

const Home = compose(
	withAuthorization(authCondition),
	withRouter,
	connect(
		mapSetToProps,
		mapDispatchToProps,
	),
)(HomeComponent);

export default Home;
