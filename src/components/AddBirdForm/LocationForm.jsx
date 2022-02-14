import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';


function LocationForm(){
    let [newLocation, setNewLocation] = useState('');
    //setup history
    const history = useHistory();

    //setup dispatch
    const dispatch = useDispatch();
    function addLocation (){
        dispatch({
            type: 'ADD_LOCATION', 
            payload: newLocation
        })
        history.push('/image')
    }
    return(
        <>
       <div className ="InputAndBtn">
          <label> Enter the City/State or City/Country of Sighting <br/> For DreamList, Leave Input Field Empty
          <Box  
            sx={{ width: 350 }}
          >
          <TextField
            fullWidth
            id="descriptionText"
            placeholder="(City, State) or (City, Country) Spotted"
            value={newLocation}
            onChange={(e) => { setNewLocation(e.target.value) }}
          />
           </Box>
           </label>
           <button onClick={addLocation}> Next </button>
           </div>
        </>
    )
}
export default LocationForm;