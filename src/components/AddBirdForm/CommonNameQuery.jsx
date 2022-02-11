import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";


function CommonNameQuery(){
    const dispatch = useDispatch();
    // goals:
    //load reducer with common name and id 
    const commonNameList = useSelector(store => store.commonNameReducer); 
    console.log('common name list id is', commonNameList);
    // save reducer as an empty array 
    //put the common name and id into the reducer 
    return(
        <>
        <div className="InputAndBtn">
        <Autocomplete
            options= {commonNameList}
            sx={{ width: 350 }}
            value= {birdId.label}
            
            renderInput={(params) => <TextField {...params} label="Common Name" />}
            onChange={(e, newValue) => { 
                            dispatch ({ type: 'SET_BIRD_ID',
                                        payload: newValue.id }) }}
            
        />
     </div>
        </>
    )
}
export default CommonNameQuery;

  