import * as ACTION from 'constants/constants';
import { takeLatest } from 'redux-saga/effects';
import productSaga from './productSaga';

function* rootSaga() {
  yield takeLatest([
    ACTION.GET_PRODUCTS
  ], productSaga);
}

export default rootSaga;
