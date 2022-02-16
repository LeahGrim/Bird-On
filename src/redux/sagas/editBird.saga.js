import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* editSelectedBird(action){
    console.log('in editSelectedBird');
    yield axios.put(`/client/life/list/${action.payload.id}`, action.payload);
    console.log('action.payload.id', action.payload.id);
    //refresh client bird list 
//     // yield put({
//     //     type: 'CLIENT_LIST_REDUCER',
//     //     payload: response.data
//     // })
}

function* fetchClientBird(action){
    console.log('this is the action... expect to see a payload with a number', action);
    let response= yield axios.get(`/client/life/list/${action.payload}`);
    console.log('response.data', response.data)
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
