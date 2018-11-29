import * as actionsType from '../constants/actionsType';

const INITIAL_STATE = {
	authUser: null,
};

const applySethUsers = (state, action) => ({
	...state,
	authUser: action.authUser,
});

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsType.USERS_SET: {
			return applySethUsers(state, action);
		}
		default:
			return state;
	}
};

export default userReducer;
