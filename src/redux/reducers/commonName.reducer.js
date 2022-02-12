
// Holds all common names from the large database 
const commonNameReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_COMMON_NAME_REDUCER': 
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer


export default commonNameReducer;



