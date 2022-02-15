import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function DreamDeleteButton({bird}){
    const user= useSelector(store => store.user);
    const dispatch = useDispatch();
 
    
  console.log('birdid is ', bird.bird_id)
    function DeleteBird(id){
            dispatch({
                type: 'DELETE_DREAM_BIRD',
                payload: id
            })
            dispatch({
                type: 'FETCH_DREAM_LIST'
              });
  }
  
  
    return(
        <>
        <button onClick={() => DeleteBird(bird.bird_id)}> Delete</button>
        </>
    )
}
export default DreamDeleteButton;