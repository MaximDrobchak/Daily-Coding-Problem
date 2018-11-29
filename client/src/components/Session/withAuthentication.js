import React from 'react';
import { connect } from 'react-redux';

import * as actionsType from '../../constants/actionsType';
import { firebase } from '../../firebase';

const withAuntefication = Component => {
	class WithAuntefication extends React.Component {
		componentDidMount() {
			const { onSetAuthUser } = this.props;

			firebase.auth.onAuthStateChanged(authUser =>
				authUser
					? onSetAuthUser(authUser)
					: onSetAuthUser(null),
			);
		}

		render() {
			return <Component />;
		}
	}

	const mapDispatchToProps = dispatch => ({
		onSetAuthUser: authUser =>
			dispatch({ type: actionsType.AUTH_USER_SET, authUser }),
	});

	return connect(
		null,
		mapDispatchToProps,
	)(WithAuntefication);
};

export default withAuntefication;
