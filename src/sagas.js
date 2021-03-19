import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, putData } from './actions/actions';

async function fetchData() {
    const res = await fetch('http://demo0382925.mockable.io/')
    return await res.json();
}

function* workerLoadData() {
    const data = yield call(fetchData);

    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
}