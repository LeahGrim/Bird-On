const setSelectedDreamBird = (state={}, action) => {
    switch(action.type) {
        case 'SET_DETAIL_DREAM_BIRD': 
            return action.payload
        default:
            return state;
    }
  }; // End setSelectedDreamBird

  export default setSelectedDreamBird;
