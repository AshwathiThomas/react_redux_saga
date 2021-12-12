import { put, call } from 'redux-saga/effects';
import { getMovie } from '../api';
import * as types from '../../consts/actionTypes';

export function* getMovieListSaga(payload) {
	try {
		const demoData = yield call(getMovie, payload);

		yield put({ type: types.GET_DEMO_SUCCESS, demoData });
	} catch (error) {
		yield put({ type: types.SEARCH_MEDIA_ERROR, error });
	}
}
