import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
// route is /client/birds
function* addBirdToListSaga(){
    yield takeEvery('ADD_BIRD_TO_LIST', addBird)

}

function* addBird(action){
    let response= yield axios.post('/client/birds', {birdToAdd: action.payload})
    
    yield put({
        type:'ADD_BIRD_TO_CLIENT_LIST',
        payload: response.data
    })
}

export default addBirdToListSaga;