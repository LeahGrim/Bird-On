import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* DeleteBirdSaga(){
    yield takeEvery('DELETE_DREAM_BIRD', deleteBirdId)
    yield takeEvery('DELETE_LIFE_BIRD', deleteBird)

}
//function is triggered when the 'DELETE_DREAM_BIRD' is called
//on the client side (DreamList.jsx)
function* deleteBirdId(action){
    let response= yield axios.delete(`client/dream/list/${action.payload}`);

    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })
}
//function is triggered when the 'DELETE_LIFE_BIRD' is called
//on the client side (SightedList.jsx)
function* deleteBird(action){
    let response=  yield axios.delete(`/client/life/list/${action.payload}`);
   
    yield put({
        type: 'CLIENT_LIST_REDUCER',
        payload: response.data
    })

}
export default DeleteBirdSaga;