import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory, Link } from 'react-router-dom';

function CommonNameQuery (){
    const commonNameList = useSelector(store => store.commonNameReducer); 
    const birdId = useSelector(store => store.birdId);
    //setup dispatch
    const dispatch = useDispatch();
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
                          //console.log('this is the newValue.id', newValue.id);
                            dispatch ({ type: 'SET_BIRD_ID',
                                        payload: newValue.id })
                             }}
            
        />
        </label>

        <Link to="/description"><button className="ImageBtn" >
            NEXT  
            </button></Link>
            
     </div>
    </>
    )
}
export default CommonNameQuery;