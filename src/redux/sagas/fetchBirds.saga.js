import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchBirdsSaga(){
    yield takeEvery('FETCH_BIRDS', fetchBirds)

}

function* fetchBirds(){
    let response = yield axios.get('/birds');
   
    yield put({
        type: 'SET_BIRD_DATA',
        payload: response.data
    })
}

export default fetchBirdsSaga;