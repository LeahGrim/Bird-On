import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function CommonNameQuery(){
    // goals:
    //load reducer with common name and id 
    const commonNameList = useSelector(store => store.commonNameReducer); 
    // save reducer as an empty array 
    //put the common name and id into the reducer 
    return(
        <>
        <Autocomplete
            options= {commonNameList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Common Name" />}

     />
        </>
    )
}
export default CommonNameQuery;