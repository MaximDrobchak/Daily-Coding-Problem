import * as actionsType from '../constants/actionsType';

const INITIAL_STATE = {
	list: [],
};

const listReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsType.FETCH_LIST: {
			return applyAddList(state, action);
		}
		default:
			return state;
	}
};

const applyAddList = (state, action) => ({
	...state,
	list: action.list,
});

export default listReducer;
