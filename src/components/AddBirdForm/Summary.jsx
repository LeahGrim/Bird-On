import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';

function Summary (){
    const user= useSelector(store => store.user);
    const summary = useSelector(store => store.formReducer); 
   // const birdId = useSelector(store => store.birdId);
   const birdId = useSelector(store => store.birdId);
   const commonNameList = useSelector(store => store.commonNameReducer); 
   let userId= user.id;

        
    const summaryToSend = {
        description: summary.description,
        location_spotted: summary.location_spotted,
        date_spotted: summary.date_spotted,
        image_path: summary.image_path,
        bird_id: birdId
    }

        //setup history
       const history = useHistory();

       //setup dispatch
       const dispatch = useDispatch();
    // send to the saga
       
    const submitBird = () => {
        dispatch({
            type: 'ADD_BIRD_TO_CLIENT_LIST',
            payload: summaryToSend
        }) 
        history.push('/sightedList')
    }

    return(
        <>
        <h2> Are you sure this is the Bird that you want to add?</h2>
        <h2> description is: </h2> <h3> {summaryToSend.description}</h3>
        <h2> location is: </h2> <h3> {summaryToSend.location_spotted}</h3>
        <h2> date recorded: </h2> <h3> {summaryToSend.date_spotted}</h3>
        {/* here we will source in the image */}
        <h2> image: </h2> <h3>  {summaryToSend.image_path}</h3>

        <button onClick={submitBird}> Send my Bird </button>
        </>
    )
}
export default Summary;