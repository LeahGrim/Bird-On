import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';


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
        
            <DeleteIcon fontSize= "large" onClick={() => DeleteBird(bird.bird_id)}> </DeleteIcon>
        </>
    )
}
export default DreamDeleteButton;