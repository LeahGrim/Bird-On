import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


 function* imageSearchSaga() {
    yield takeEvery('SET_SEARCH', searchParam);
    
  }
function* searchParam(action){
    let response = yield axios.get('/search/photos', {params: {q: action.payload.text}})
     
    
    yield put({
        type: 'SET_RESULTS',
        payload: response.data
    })
  }

 
  export default imageSearchSaga