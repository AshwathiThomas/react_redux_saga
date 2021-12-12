import * as types from '../../consts/actionTypes';

export const getMovieList = payload => ({
	type: types.GET_NEXT_PAGE,
	payload
});
