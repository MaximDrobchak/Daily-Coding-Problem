import * as actionsType from '../constants/actionsType';

const INITIAL_STATE = {
	authUser: null,
};

const applySetAuthUser = (state, action) => ({
	...state,
	authUser: action.authUser,
});

const sessionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsType.AUTH_USER_SET: {
			return applySetAuthUser(state, action);
		}
		default:
			return state;
	}
};

export default sessionReducer;
