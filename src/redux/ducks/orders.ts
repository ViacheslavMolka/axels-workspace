import { takeEvery, put, call } from 'redux-saga/effects';

const PUT_DATA: string = 'axels-test-task/orders/PUT_DATA';
const LOAD_DATA: string = 'axels-test-task/orders/LOAD_DATA';

type initialStateType = {
    data: Array<object>
}

const initialState: initialStateType = {
    data: []
};
  
export default function reducer (state = initialState, action: putDataActionType): initialStateType {
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

type putDataActionType = {
    type: typeof PUT_DATA
    payload: Array<object>
}

type loadDataActionType = {
    type: typeof LOAD_DATA
}

export const putData = (payload: []): putDataActionType => ({type: PUT_DATA, payload});
export const loadData = (): loadDataActionType => ({type: LOAD_DATA});


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
