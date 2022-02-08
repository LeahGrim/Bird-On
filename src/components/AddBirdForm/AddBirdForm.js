import "./AddBirdForm.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import BirdList from "../BirdList/BirdList";

function AddBirdForm() {
  const pictureResults = useSelector(store => store.imageResultList)
  const birdDatabaseData= useSelector(store => store.birdDatabaseData)
 console.log('birdDataBase is', birdDatabaseData);
  let [newImageSearch, setNewImageSearch] = useState('');
  let [newDateAdded, setNewDateAdded] = useState('');
  let [newDescription, setNewDescription] = useState('');
  let [newLocation, setNewLocation] = useState('');
  let [commonName, setCommonName] = useState('');
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
      type: "FETCH_BIRDS"
    })
  }, [])

//create bird & descriptions to add to dispatch, 
//dispatch will store object in a reducer, 
//reducer will post to table 
// const [birdToAdd, setBirdToAdd]= useState({
//     common_Name: commonName, 
//     image_path: chosenPicture,
//     date_spotted: newDateAdded, 
//     description: newDescription, 
//     location_spotted: newLocation, 
//     birdId: bird_id
//     })

function addBirdToList(){
    dispatch({
        type: 'ADD_BIRD_TO_LIST',
        payload: birdObjectToAdd
    }) 
      
  }

  const chosenPic = (img) => {
    let imgUrl= `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
    console.log('chosen picture is', imgUrl);
    setChosenPicture(imgUrl);
  }
  return (
    <>
      {/* on submit function will dispatch the object (cont each each input attr) */}
      <div className="inputContainer">
        <form onSubmit={addBirdToList}>
          <select 
            id= "select-common-name"
            type="text"
            size= "10"
            id="commonNameText"
            value={commonName}
            onChange={(e) => {
              setCommonName(e.target.value);
            }}
          >
            {birdDatabaseData.map((bird, i)=> (
            <option key={i}> {bird.Common_name} </option>

            ))};

          </select>
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
            placeholder="Date Spotted (leave empty for Dream Bird)"
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
          <button className="formSubmitBtn"> Add Bird To List</button>
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
                    // STRUGGLING WITH HOW TO SEND THIS IMAGE TO SAGA -> SQL TO STORE AS CORRESPONDING BIRD
                    // FOR THE BIRD THAT THE CLIENT IS SPECIFYING
                    //prefer to send it as an img src url but it img.src returns undefined 
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
