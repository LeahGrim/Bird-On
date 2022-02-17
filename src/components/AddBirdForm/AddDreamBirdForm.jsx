import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';


function AddDreamBirdForm() {
  const pictureResults = useSelector(store => store.imageResultList)
  const user= useSelector(store => store.user);
  const birdId = useSelector(store => store.birdId);
  const commonNameList = useSelector(store => store.commonNameReducer); 
  let userId= user.id;
 
  let [newImageSearch, setNewImageSearch] = useState('');
  let [newDescription, setNewDescription] = useState('');
  let [chosenPicture, setChosenPicture]= useState('');
  //setup history
  const history = useHistory();

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
    location_spotted: '',
    date_spotted: '', 
    image_path: chosenPicture,
    bird_id: birdId
    }

console.log('bird to add ', birdToAdd)

// requires the client to enter necessary input 
function addBirdToList(event){
  event.preventDefault();
        dispatch({
            type: 'ADD_BIRD_TO_CLIENT_LIST',
            payload: birdToAdd
        }) 
        history.push('/dreamList')

}
  function chosenPic (img)  {
    let imgUrl= `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
    console.log('chosen picture is', imgUrl);
    setChosenPicture(imgUrl);
  
  }
  return (
      <div className="inputContainer">
        <div className="InputAndBtn">
          <label> Search for Your Bird by Common Name
        <Autocomplete
            options= {commonNameList}
            sx={{ width: 350 }}
            value= {birdId.label}
            
            renderInput={(params) => <TextField {...params} label="Common Name" />}
            onChange={(e, newValue) => { setNewImageSearch(newValue.Scientific_name)
                            dispatch ({ type: 'SET_BIRD_ID',
                                        payload: newValue.id }) }}
            
        />
        </label>
        </div>

            <div className="inputAndLabel"> 
           <label> Search for Images of Birds: 
            <Box sx={{ width: 350 }} >
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
            </label>
         
            <button className="ImageBtn" onClick={addNewImageSearch}>
              Find Images
            </button>
      
          <div className="InputAndBtn">
          <label> Enter the Details of Your Dreams
          <Box  
                sx={{ width: 350 }}
            > 
            <TextField
            fullWidth
            id="descriptionText"
            placeholder="Description of Dream"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
          </Box>
          </label>
            </div>

          <button className="formSubmitBtn" onClick={addBirdToList} > Add Bird To List </button>
       
      </div>

      {/* List of Birds */}
    
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
  );
}

export default AddDreamBirdForm;
