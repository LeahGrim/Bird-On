const birdId = (state='', action) => {
    switch(action.type) {
        case 'SET_BIRD_ID': 
            return action.payload
        default:
            return state;
    }
  }; // End birdId

  export default birdId;