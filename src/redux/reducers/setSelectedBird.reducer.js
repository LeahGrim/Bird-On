const setSelectedBird = (state={}, action) => {
    switch(action.type) {
        case 'SET_DETAIL_BIRD': 
            return action.payload
        case 'UPDATE_DETAIL_BIRD' :
            return {
                ...state,
                ...action.payload,
              };
        default:
            return state;
    }
  }; // End setSelectedLifeBird

  export default setSelectedBird;
