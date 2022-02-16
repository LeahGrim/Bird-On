import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';




function* editSelectedBird(action){
    let response = yield axios.put(`/client/life/list/${action.payload.id}`, action.payload);
    //refresh client bird list 
    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })
}

function* fetchClientBird(action){
    yield axios.get(`/client/life/list/${action.payload.id}`);
    
    yield put({
        type: 'SET_DETAIL_BIRD',
        payload: response.data
    })
}

function* editBirdSaga(){
    yield takeEvery('EDIT_LIFE_BIRD', editSelectedBird);
    yield takeEvery('FETCH_SELECTED_BIRD',fetchClientBird )
}

export default editBirdSaga;
