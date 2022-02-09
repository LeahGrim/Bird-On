const clientList = (state=null, action) => {
    switch(action.type) {
        case 'ADD_BIRD_TO_CLIENT_LIST': 
            return action.payload
        default:
            return state;
    }
  }; // End clientList

  export default clientList;