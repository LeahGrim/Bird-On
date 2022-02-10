const clientList = (state=[], action) => {
    switch(action.type) {
        case 'CLIENT_LIST_REDUCER': 
        console.log('in client list reducer', action.payload);
            return action.payload
        default:
            return state;
    }
  }; // End clientList

  export default clientList;