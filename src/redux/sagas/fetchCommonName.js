import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCommonNameSaga(){
    yield takeEvery('FETCH_COMMON_NAMES', fetchCommonNames)

}

function* fetchCommonNames(){
    let response = yield axios.get('/birds/common');
   
    yield put({
        type: 'SET_COMMON_NAME_REDUCER',
        payload: response.data
    })
}

export default fetchCommonNameSaga;