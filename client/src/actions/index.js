import * as actionsType from '../constants/actionsType';

export const doUpdateList = list => {
	return { type: actionsType.FETCH_LIST, list };
};
