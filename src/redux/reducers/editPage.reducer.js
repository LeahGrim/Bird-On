
//Form reducer to store the clients addition  
const editReducer = (
    state = {
        description: '',
        location_spotted: '',
        date_spotted: '',  
}, 
action) => {
    switch (action.type){
        case 'ADD_DESCRIPTION':
            return {...state, description: (state.description = action.payload)};
        case 'ADD_LOCATION':
            return{...state, location_spotted: (state.location_spotted = action.payload)};
        case 'ADD_DATE':
            return{...state, date_spotted: (state.date_spotted = action.payload)};
        case 'ADD_IMAGE':
            return{...state, image_path: (state.image_path = action.payload)};
        case 'SET_BIRD_ID':
            return{...state, bird_id: (state.bird_id = action.payload)};
            
            case 'EMPTY_STATE':
            state= {
                    description: '', 
                    location_spotted: '',
                    date_spotted: '',
                    image_path: '',
                    bird_id: ''
                }
            return state
        }
    return state;
}
export default editReducer;