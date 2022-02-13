import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* DeleteBirdSaga(){
    yield takeEvery('DELETE_DREAM_BIRD', deleteBirdId)

}

function* deleteBirdId(action){
    let response= yield axios.delete(`/client/dream/list/{action.payload}`);

    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })
}
export default DeleteBirdSaga;