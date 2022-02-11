import { combineReducers } from 'redux';

const birdDatabaseData = (state=[], action) => {
    switch(action.type) {
        case 'SET_BIRD_DATA': 
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer


export default birdDatabaseData;
