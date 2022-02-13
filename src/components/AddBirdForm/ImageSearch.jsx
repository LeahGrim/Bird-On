import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router-dom';
import "./AddBirdForm.css";


function ImageSearch(){
    let [newImageSearch, setNewImageSearch] = useState('');
    let [chosenPicture, setChosenPicture]= useState('');
    
    //setup dispatch
    const dispatch = useDispatch();

    function addNewImageSearch(event) {
        event !== undefined ? event.preventDefault() : false; 
        dispatch({
          type: "SET_IMAGE_SEARCH",
          payload: { text: newImageSearch },
        });
      }
      const chosenPic = (img) => {
        let imgUrl= `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
        console.log('chosen picture is', imgUrl);
        setChosenPicture(imgUrl);
        dispatch({
            type: 'ADD_IMAGE',
            payload: chosenPicture
        })
      }
    return(
        <>
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
    )
}
export default ImageSearch;