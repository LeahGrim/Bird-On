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

    //setup dispatch
    function addNewImageSearch(event) {
        event !== undefined ? event.preventDefault() : false; // did this in group work
        dispatch({
          type: "SET_IMAGE_SEARCH",
          payload: { text: newImageSearch },
        });
      }

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
                            dispatch ({
                                        type:'SET_COMMON_NAME',
                                        payload: newValue.label
                                      }) }}
            
        />
        </label>
     </div>
    </>
    )
}
export default CommonNameQuery;