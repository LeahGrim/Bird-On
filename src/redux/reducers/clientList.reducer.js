const clientList = (state=[], action) => {
    switch(action.type) {
        case 'CLIENT_LIST_REDUCER': 
            return action.payload
        default:
            return state;
    }
  }; // End clientList

  export default clientList;
