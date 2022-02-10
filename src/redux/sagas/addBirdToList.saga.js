import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addBird(action){
     yield axios.post('/client/birds', action.payload)
    
    yield put({
        type:'FETCH_CLIENT_LIST'
    })
}

// route is /client/birds
function* addBirdToListSaga(){
    yield takeEvery('ADD_BIRD_TO_CLIENT_LIST', addBird)
}

export default addBirdToListSaga;