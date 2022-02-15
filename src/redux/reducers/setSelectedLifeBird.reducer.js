const setSelectedLifeBird = (state={}, action) => {
    switch(action.type) {
        case 'SET_DETAIL_BIRD': 
            return action.payload
        default:
            return state;
    }
  }; // End setSelectedLifeBird

  export default setSelectedLifeBird;
