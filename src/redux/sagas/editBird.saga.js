import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* editBirdSaga(){
    yield takeEvery('EDIT_LIFE_BIRD', editSelectedBird);
    yield takeEvery('FETCH_SELECTED_BIRD',fetchClientBird )
}

function* editSelectedBird(action){
    let response = yield axios.put(`/client/life/list/${action.payload.id}`, action.payload);

    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })
}

function* fetchClientBird(action){
    yield axios.get(`/client/list/bird/${action.payload.id}`);

}


export default editBirdSaga;
