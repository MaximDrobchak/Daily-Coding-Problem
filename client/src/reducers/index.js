import { combineReducers } from 'redux';

import sessionReducer from './session';
import userReducer from './user';
import answerReducer from './answer';
import listReducer from './list';

const rootReducer = combineReducers({
	sessionState: sessionReducer,
	userState: userReducer,
	listState: listReducer,
	answerState: answerReducer,
});

export default rootReducer;
