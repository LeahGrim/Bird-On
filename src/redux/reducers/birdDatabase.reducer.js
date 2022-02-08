import { combineReducers } from 'redux';

const birdDatabaseData = (state=null, action) => {
    switch(action.type) {
        case 'SET_COMMON_NAME': 
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer


export default birdDatabaseData;
