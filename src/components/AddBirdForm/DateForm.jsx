import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';

function DateForm(){
    let [newDateAdded, setNewDateAdded] = useState('');

    //setup history
    const history = useHistory();
    
    //setup dispatch
    const dispatch = useDispatch();

    console.log('new date added', newDateAdded);
    function addDateToReducer(){
        dispatch({
            type: 'ADD_DATE', 
            payload: newDateAdded
        })
        history.push('/summary')
    }
    return(
        <>

             
        <div className= "InputAndBtn">
          <label> Enter The Date Spotted Here <br/> (For DreamList, Enter Today's Date)
          <input
            required
            type="date"
            name= "spotted"
            id="dateSpottedText"
            value={newDateAdded}
            onChange={(e) => {
              setNewDateAdded(e.target.value);
            }}
          />
          </label>
          <button onClick={addDateToReducer}> Next</button>
          </div>
        </>
    )
}
export default DateForm;