import "./AddBirdForm.css";
import CommonNameQuery from './CommonNameQuery.jsx';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AddBirdForm() {
  const pictureResults = useSelector(store => store.imageResultList)
  const user= useSelector(store => store.user)
  const birdId = useSelector(store => store.birdId);
  console.log('birdId is', birdId);
  const commonNameList = useSelector(store => store.commonNameReducer); 

  let userId= user.id;
 
  let [newImageSearch, setNewImageSearch] = useState('');
  let [newDateAdded, setNewDateAdded] = useState('');
  let [newDescription, setNewDescription] = useState('');
  let [newLocation, setNewLocation] = useState('');
  let [chosenPicture, setChosenPicture]= useState('');

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
      type: 'FETCH_BIRDS'
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
console.log('bird to Add is ', birdToAdd);



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
         {/* <CommonNameQuery/>
           */}
          <div className="InputAndBtn">
            <Box  
                sx={{ width: 350 }}
            >
                <TextField
                  fullWidth
                  id="apiImageSearch"
                  placeholder="Search for Image of Bird"
                  value={newImageSearch}
                  onChange={(e) => {
                    setNewImageSearch(e.target.value);
                  }}
                />
            </Box>
            <button className="ImageBtn" onClick={addNewImageSearch}>
              Find Images
            </button>
          </div>
          
          <div className= "InputAndBtn">
          <input
            type="date"
            name= "spotted"
            id="dateSpottedText"
            value={newDateAdded}
            onChange={(e) => {
              setNewDateAdded(e.target.value);
            }}
          />
          </div>
          <div className="InputAndBtn">
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
            </div>
          <div className ="InputAndBtn">
          <Box  
            sx={{ width: 350 }}
          >
          <TextField
            fullWidth
            id="descriptionText"
            placeholder="(City, State) or (City, Country) Spotted"
            value={newLocation}
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
          />
           </Box>
           </div>
         
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
   
    </>
  );
}

export default AddBirdForm;
