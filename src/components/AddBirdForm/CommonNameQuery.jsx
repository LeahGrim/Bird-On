import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';

function CommonNameQuery (){
    const commonNameList = useSelector(store => store.commonNameReducer); 

    //setup history
    const history = useHistory();
    
    useEffect(()=> {
        dispatch({
          type: 'FETCH_COMMON_NAMES'
        });
      }, [])


    return(
    <>  
    <div className="InputAndBtn">
          <label> Search for Your Bird by Common Name
        <Autocomplete
            options= {commonNameList}
            sx={{ width: 350 }}
            value= {birdId.label}
            
            renderInput={(params) => <TextField {...params} label="Common Name" />}
            onChange={(e, newValue) => { 
                            dispatch ({ type: 'SET_BIRD_ID',
                                        payload: newValue.id })
                             }}
            
        />
        </label>

        <button className="ImageBtn">
            NEXT  
            </button>
            
     </div>
    </>
    )
}
export default CommonNameQuery;