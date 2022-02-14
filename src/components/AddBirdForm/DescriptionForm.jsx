import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';

function DescriptionForm(){
    const [newDescription, setNewDescription] = useState('');
 //setup history
 const history = useHistory();

 //setup dispatch
 const dispatch = useDispatch();

function addDescription (){
        console.log('ugly ass add description here we are')
        dispatch({
            type: 'ADD_DESCRIPTION',
            payload: newDescription
        })
        history.push('/location');
}

 console.log('new description is ', newDescription);
    return(
        <>
        <h1> in description form... page 2</h1>
        <div className="InputAndBtn">
          <label> What Was the Bird Doing? <br/> Enter the Details of Your Dreams
          <Box  
                sx={{ width: 350 }}
            > 
            <TextField
            fullWidth
            id="descriptionText"
            placeholder="Description of Sighting"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
          </Box>
          </label>
          <button onClick={addDescription}>
              Next
          </button>
            </div>
        </>
    )
}
export default DescriptionForm;