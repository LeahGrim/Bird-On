import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function LifeDeleteButton({bird}){
    const user= useSelector(store => store.user);
    const dispatch = useDispatch();
 
    
  console.log('birdId is ', bird.bird_id)
    function DeleteBird(id){
            dispatch({
                type: 'DELETE_LIFE_BIRD',
                payload: id
            })
            //after the specific bird is deleted, the client life list is re-rendered
            dispatch({
                type: 'FETCH_CLIENT_LIST'
              });
  }
  
  
    return(
        <>
        <button onClick={() => DeleteBird(bird.bird_id)}> Delete</button>
        </>
    )
}
export default LifeDeleteButton;