import "./AddBirdForm.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function AddBirdForm() {
  const pictureResults = useSelector(store => store.imageResultList)
  const birdDatabaseData= useSelector(store => store.birdDatabaseData)
  const user= useSelector(store => store.user)
  let userId= user.id;
 
  let [newImageSearch, setNewImageSearch] = useState('');
  let [newDateAdded, setNewDateAdded] = useState('');
  let [newDescription, setNewDescription] = useState('');
  let [newLocation, setNewLocation] = useState('');
  let [commonName, setCommonName] = useState('');
  let [chosenPicture, setChosenPicture]= useState('');
  let [birdId, setBirdId]= useState('');
console.log('bird id', birdId)
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
let birdToAdd = 
  {
    user_id: userId,
    common_name: commonName, 
    description: newDescription, 
    location_spotted: newLocation,
    date_spotted: newDateAdded, 
    image_path: chosenPicture,
    bird_id: birdId
    }

console.log('bird to add', birdToAdd)
function addBirdToList(){
    dispatch({
        type: 'ADD_BIRD_TO_LIST',
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
      {/* on submit function will dispatch the object (cont each each input attr) */}
      <div className="inputContainer">
        <form >
          <select 
            id= "select-common-name"
            name= "Add Common Name"
            value={birdId}
            onChange={(e) => {
              setBirdId(e.target.value);
            }}
          >
        
            {birdDatabaseData?.map((bird, i)=> (
            <option key={i} value={bird.id}> {bird.Common_name} </option>

            ))}
      
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
