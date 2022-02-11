import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";

function CommonNameQuery(){
    const [birdId, setBirdId] = useState('');
    // goals:
    //load reducer with common name and id 
    const commonNameList = useSelector(store => store.commonNameReducer); 
    // save reducer as an empty array 
    //put the common name and id into the reducer 
    return(
        <>
        <div className="InputAndBtn">
        <Autocomplete
            options= {commonNameList}
            sx={{ width: 350 }}
            value= {commonNameList.id}
            
            renderInput={(params) => <TextField {...params} label="Common Name" />}
            onChange={(e) => {
                 setBirdId(e.target.value)}}
     />
     </div>
        </>
    )
}
export default CommonNameQuery;

  