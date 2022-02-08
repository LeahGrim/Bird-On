import './AddBirdForm.css';

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import BirdList from '../BirdList/BirdList'

function AddBirdForm(){
    let [newImageSearch, setNewImageSearch]= useState('');
    let [newDateAdded, setNewDateAdded] = useState('');
    let [newDescription, setNewDescription] = useState('');
    
    const pictureResults = useSelector(store => store.imageResultList)

    let [commonName, setCommonName] = useState('');
  console.log('pictureResults', pictureResults)
  
    //setup dispatch 
    const dispatch = useDispatch();
  
    function addNewImageSearch(event){
      event !== undefined ? event.preventDefault() : false // did this in group work 
      dispatch ({
        type: 'SET_SEARCH', 
        payload: {text: newImageSearch}
      })
    }     

  
  
  
    return(
        <>
        {/* on submit function will dispatch the object (cont each each input attr) */}
        <form>
        <input type= "text"
               placeholder= "Enter The Common Name Here"
               value= {commonName} 
               onChange= {(e) => { setCommonName(e.target.value) }}
               />
       

        <input type= "text" 
               id="search" 
               placeholder= "Search for Image of Bird" 
               value={newImageSearch}
               onChange= {(e) => { setNewImageSearch(e.target.value) }}
               />
        <input type= "text" 
               id="search" 
               placeholder= "Date Spotted (leave empty for Dream Bird)" 
               value={newDateAdded}
               onChange= {(e) => {setNewDateAdded(e.target.value)}}
               />
        <input type= "text" 
               id="search" 
               placeholder= "" 
               value={newDescription}
               onChange= {(e) => {setNewDescription(e.target.value) }}
               />
        <br />
        <div className= 'displayImagesButton'> 
            <button onClick={addNewImageSearch}>Find Images</button>
        </div>
        </form>

      {/* List of Birds */}
        <BirdList />
        </>
    )
  
}

export default AddBirdForm;