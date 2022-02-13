import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function DreamDeleteButton({bird}){
    const dispatch = useDispatch();

  
    function DeleteBird(id){
            dispatch({
                type: 'DELETE_DREAM_BIRD',
                payload: id
            })
  }
  
  
    return(
        <>
        <button onClick={() => DeleteBird(bird.id)}> Delete</button>
        </>
    )
}
export default DreamDeleteButton;