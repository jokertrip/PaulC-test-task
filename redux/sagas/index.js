import { takeEvery, put, call } from 'redux-saga/effects'

export function* sagaWatcher() {
    yield takeEvery("SET_DATA", sendRequest);
}

function* sendRequest(action) {
    try {
        const response = yield call( () =>
            fetch('https://httpbin.org/post', action.payload))
        yield put({type: "SET_IS_LOGGED"});
    } catch (e) {
        console.log('something goes wrong', e)
    }
}
