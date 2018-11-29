import { combineReducers } from 'redux';

import sessionReducer from './session';
import userReducer from './user';
import answerReducer from './answer';

const rootReducer = combineReducers({
	sessionState: sessionReducer,
	userState: userReducer,
	answerState: answerReducer,
});

export default rootReducer;
