import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClientListSaga(){
    yield takeEvery('FETCH_CLIENT_LIST', fetchClientList)

}

function* fetchClientList(){
    let response= yield axios.get('/client/birds/add');

    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })
}
export default fetchClientListSaga;