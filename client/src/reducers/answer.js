import * as actionsType from '../constants/actionsType';

const answers = [];
const applySetAnswer = (state, action) => ({
	state,
	...action,
});

const answerReducer = (state = answers, action) => {
	switch (action.type) {
		case actionsType.ON_SAND_VALUE: {
			return applySetAnswer(state, action);
		}
		default:
			return state;
	}
};

export default answerReducer;
