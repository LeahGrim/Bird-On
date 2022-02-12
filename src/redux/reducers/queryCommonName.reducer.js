import { combineReducers } from 'redux';


//will hold the common name selected from the client
 
const commonNameQuery = (state={}, action) => {
    switch(action.type) {
        case 'SET_COMMON_NAME_SEARCH': 
            return action.payload
            
        case 'EMPTY_FORM_REDUCER':     
            return {}
            
        default:
            return state;
    }
  }; // End commonNameQuery reducer


export default commonNameQuery;