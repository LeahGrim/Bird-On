
//Form reducer to store the clients addition  
const formReducer = (
    state = {
        userId: '', 
        description: '',
        location_spotted: '',
        date_spotted: '', 
        image_path: '', 
        bird_id: ''
}, 
action) => {
    switch (action.type){
        case 'ADD_DESCRIPTION':
            return {...state, feeling: (state.description = action.payload)};
        case 'ADD_LOCATION':
            return{...state, understanding: (state.location_spotted = action.payload)};
        case 'ADD_DATE':
            return{...state, support: (state.date_spotted = action.payload)};
        case 'ADD_IMAGE':
            return{...state, comments: (state.image_path = action.payload)};
        // case 'SET_BIRD_ID':
        //     return{...state, comments: (state.bird_id = action.payload)};
            
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
export default formReducer;