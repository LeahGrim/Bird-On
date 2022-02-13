import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDreamListSaga(){
    yield takeEvery('FETCH_DREAM_LIST', fetchDreamList)

}

function* fetchDreamList(){
    let response= yield axios.get('/client/dream/list');

    yield put({
        type: 'DREAM_LIST_REDUCER',
        payload: response.data
    })
}
export default fetchDreamListSaga;