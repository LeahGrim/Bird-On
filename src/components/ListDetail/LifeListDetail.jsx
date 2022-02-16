import "./DetailView.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

function LifeListDetail(){
    const selectedBird = useSelector((store) => store.setSelectedLifeBird) 
    
    //establish history to later send the user back to the dreamList view
    const history = useHistory();
    //setup dispatch
    const dispatch = useDispatch();
    //setup params so that url contains ID
    const params = useParams(); 

    //define local state variables for input toggle 
    const [editable, setEditable] = useState(false);
    let [newDateAdded, setNewDateAdded] = useState('');
    let [newLocation, setNewLocation] = useState('');
    let [newDescription, setNewDescription] = useState('');
   
    //if statements to handle if the client has no edits for input fields
   //the information sent in the birdToEdit will equate to the original selectedBird info
   if( newDateAdded === ''){
       setNewDateAdded(selectedBird.date_spotted)
   } 
   if(newLocation === ''){
       setNewLocation(selectedBird.location_spotted)
   }
   if(newDescription === ''){
       setNewDescription(selectedBird.description)
   }
   
   let birdToEdit={
            description: newDescription, 
            location_spotted: newLocation,
            date_spotted: newDateAdded, 
            image_path: selectedBird.image_path,
            bird_id: selectedBird.bird_id
    }
    //on page load, render new details
  console.log('params.id are', params.id);
    useEffect(()=> {
        dispatch({
          type: 'FETCH_SELECTED_BIRD',
          payload: params.id
        });
      }, [params.id]);

    //handles the toggle between input and detail view,
    //when editable is false, bird info displays
    //when editable is true, edit inputs appear
    function handleEditable(){
        setEditable(!editable);
    }

    function editBirdDetail(evt){
        evt.preventDefault();
        dispatch ({
            type: 'EDIT_LIFE_BIRD', 
            payload: params.id, selectedBird
        })
        history.push('/lifeList')

    }
    return(
        <>
        <div className= "detailPageTitle"> 
        <h2> {selectedBird.Common_name}: </h2>
        </div>
        <img 
            src= {selectedBird.image_path}
            width= {350}
            height={300}
        />
         <div className="DetailPageDescription" > 
            <h3> Order: {selectedBird.Order} </h3>
            <h3> Family: {selectedBird.Family_name} </h3> 
            <h3> Species: {selectedBird.Scientific_name} </h3>
        {/* ternary statement that when editable is false, show the client bird info
                when editable is true, show the input fields for editing purposes 
        */}
                {editable === false ?
           <div>
           <h3> Official Timestamp of Sighting: {selectedBird.date_spotted}</h3> 
            </div>
            :
                    <div className= "editInfo"> 
                    <h4> Edit Date Spotted Here</h4>
                    <input
                        required
                        type="date"
                        name= "spotted"
                        id="dateSpottedText"
                        value={selectedBird.date_spotted}
                        onChange={(evt) => {
                            dispatch({
                                type: 'UPDATE_DETAIL_BIRD', 
                                payload: {date_spotted: evt.target.value}
                            })
                        }}
                    />
                    </div>
                }
                {editable === false ?
            <h3> Location of Sighting: {selectedBird.location_spotted} </h3> : 
                    <div className ="editInfo">
                        <h4>Edit City/State <br/> City/Country of Sighting </h4>
                        <input
                            id="descriptionText"
                            placeholder=" Enter (City, State) or (City, Country)"
                            value={selectedBird.location_spotted}
                            onChange={(evt) => { 
                                            dispatch({
                                                    type: 'UPDATE_DETAIL_BIRD', 
                                                    payload: {location_spotted: evt.target.value}
                                                }) 
                                             }}
                        />
                    </div>
                }
                {editable === false ? 
            <h3> Notes on Bird: {selectedBird.description}</h3> :
                <div>
                <div className ="editInfo">
                    <h4>Edit Notes on Bird Sighting </h4>
                    <input 
                            id="descriptionText"
                            placeholder="Description of Sighting"
                            value={selectedBird.description}
                            onChange={(evt) => { dispatch({
                                                 type: 'UPDATE_DETAIL_BIRD', 
                                                payload: {description: evt.target.value}
                                             }) 
                                    }}
                    />
                </div>
                   <button className="submitChangeBtn" onClick={editBirdDetail}>
                       Submit Changes 
                    </button>  
                </div>
                }
        </div>
        {editable ===false ?
        <button onClick={handleEditable}> Edit Details </button> :
        <button onClick={handleEditable}> Cancel Edits </button> 
        }
        </>
    )
}
export default LifeListDetail;