import { takeEvery, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { watchLoadData, workerLoadData, LOAD_DATA, fetchData, putData } from './orders';
import reducer from './orders';

describe('watchLoadData', () => {
  const genObject = watchLoadData();
  
  it('should wait for every LOAD_DATA action and call workerLoadData', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(LOAD_DATA, workerLoadData));
  });
  
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

  it('redux', async () => {
    const arr = [{
        "title": "The Chelsea Boot",
        "color": "Black",
        "price": 235,
        "image_url": "https://source.unsplash.com/u94ywFnPedw",
        "id": 1
    }];

    const initialState = {
        data: []
    };

    const saga = expectSaga(workerLoadData)
        .provide([ [call(fetchData), arr] ])
        .withReducer(reducer, initialState)

    const res = await saga.dispatch(putData(arr)).run();

    expect(res.storeState.data).toEqual(arr)
  });
});