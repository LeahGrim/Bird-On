// Holds all common names from the large database 
const dreamListReducer = (state=[], action) => {
    switch(action.type) {
        case 'DREAM_LIST_REDUCER': 
            return action.payload
        default:
            return state;
    }
  }; // End resultsList reducer


export default dreamListReducer;


