import { takeEvery, put, call } from 'redux-saga/effects';

import { Orders, InitialStateType, PutDataActionType, LoadDataActionType } from './reduxTypes';

export const PUT_DATA: string = 'axels-test-task/orders/PUT_DATA';
export const LOAD_DATA: string = 'axels-test-task/orders/LOAD_DATA';


const initialState: InitialStateType = {
    data: []
};
  
export default function reducer (state = initialState, action: PutDataActionType): InitialStateType {
    switch (action.type) {
    case PUT_DATA:
    return {
        ...state,
        data: action.payload
    }
    default: 
        return state;
    }      
};


export const putData = (payload: Array<Orders>): PutDataActionType => ({type: PUT_DATA, payload});
export const loadData = (): LoadDataActionType => ({type: LOAD_DATA});


async function fetchData() {
    const res = await fetch('http://demo0382925.mockable.io/')
    return await res.json();
};

function* workerLoadData() {
    const data: [] = yield call(fetchData);

    yield put(putData(data));
};

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
};
