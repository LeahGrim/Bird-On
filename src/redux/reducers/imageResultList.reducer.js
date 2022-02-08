import { combineReducers } from 'redux';


//where the images from the flickr api is stored 
const imageResultList = (state=null, action) => {
    switch(action.type) {
        case 'SET_IMAGE_RESULTS': 
            console.log('in set results', action.payload)
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default imageResultList
