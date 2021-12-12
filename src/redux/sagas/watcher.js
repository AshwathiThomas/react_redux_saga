import { takeLatest } from 'redux-saga/effects';
import { getMovieListSaga } from './saga';

import * as types from '../../consts/actionTypes';

export default function* watchDemo() {
	yield takeLatest(types.GET_NEXT_PAGE, getMovieListSaga);
}
