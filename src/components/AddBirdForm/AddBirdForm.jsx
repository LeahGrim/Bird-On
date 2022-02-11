import "./AddBirdForm.css";
import CommonNameQuery from './CommonNameQuery.jsx';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AddBirdForm() {
  const pictureResults = useSelector(store => store.imageResultList)
  const birdDatabaseData= useSelector(store => store.birdDatabaseData)
 console.log('bird database data is', birdDatabaseData)
  const user= useSelector(store => store.user)

  let userId= user.id;
 
  let [newImageSearch, setNewImageSearch] = useState('');
  let [newDateAdded, setNewDateAdded] = useState(null);
  let [newDescription, setNewDescription] = useState('');
  let [newLocation, setNewLocation] = useState('');
  let [chosenPicture, setChosenPicture]= useState('');
  let [birdId, setBirdId]= useState('');

  //setup dispatch
  const dispatch = useDispatch();

  function addNewImageSearch(event) {
    event !== undefined ? event.preventDefault() : false; // did this in group work
    dispatch({
      type: "SET_IMAGE_SEARCH",
      payload: { text: newImageSearch },
    });
  }

  useEffect(()=> {
    dispatch({
      type: "FETCH_BIRDS"
    });
    dispatch({
      type: 'FETCH_COMMON_NAMES'
    });
  }, [])

//create bird & descriptions to add to dispatch, 
//dispatch will store object in a reducer, 
//reducer will post to table 
let birdToAdd = 
  {
    user_id: userId,
    description: newDescription, 
    location_spotted: newLocation,
    date_spotted: newDateAdded, 
    image_path: chosenPicture,
    bird_id: birdId
    }




function addBirdToList(event){
  event.preventDefault();
    dispatch({
        type: 'ADD_BIRD_TO_CLIENT_LIST',
        payload: birdToAdd
    }) 
      
  }

  const chosenPic = (img) => {
    let imgUrl= `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
    console.log('chosen picture is', imgUrl);
    setChosenPicture(imgUrl);
  }
  return (
    <>
      
      <div className="inputContainer">
        <form >
       {/* on submit function will dispatch the object (cont each each input attr) 

          <Autocomplete
            // id= "select-common-name"
            value={birdId}
            
            // onChange={(e) => {
            //   setBirdId(e.target.value);
            // }}

            options={birdDatabaseData }
            renderInput={(params) => <TextField {...params} label="Birds" />}
         />
        
             {birdDatabaseData?.map((bird, i)=> (
            <option key={i} value={bird.id}> {bird.Common_name} </option>

            ))} */}
      
          <div className="imageInputAndBtn">
            <input
              type="text"
              id="apiImageSearch"
              placeholder="Search for Image of Bird"
              value={newImageSearch}
              onChange={(e) => {
                setNewImageSearch(e.target.value);
              }}
            />
            <button className="ImageBtn" onClick={addNewImageSearch}>
              Find Images
            </button>
          </div>
          <input
            type="date"
            name= "spotted"
            id="dateSpottedText"
            value={newDateAdded}
            onChange={(e) => {
              setNewDateAdded(e.target.value);
            }}
            
          />
    
          <input 
            type="text"
            id="descriptionText"
            placeholder="Description of Sighting"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />

          <input
            type="text"
            id="descriptionText"
            placeholder="(City, State) or (City, Country) Spotted"
            value={newLocation}
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
          />

          <br />
          <button className="formSubmitBtn" onClick={addBirdToList}> Add Bird To List</button>
        </form>
      </div>

      {/* List of Birds */}
           <div>
            {pictureResults && 
          <div className= 'pictureDiv'> 
            {pictureResults.photos.photo.map((img, index) => (
                <img
                    key= {index}
                    src= {`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} 
                    alt= 'cool image'
                    width= {300}
                    height= {350}
                    onClick= {event => chosenPic(img)}
                />
            ))}
          </div>
          }
        </div>
        <CommonNameQuery/>
    </>
  );
}

export default AddBirdForm;
