import "./DetailView.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function LifeListDetail(){
    const selectedBird = useSelector((store) => store.setSelectedBird) 
    
       //Hooks
       const dispatch = useDispatch();
       const params = useParams(); 
       const history = useHistory(); 

    //define local state variables for input toggle 
     const [editable, setEditable] = useState(false);

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

    function editBirdDetail(){
       
        dispatch ({
            type: 'EDIT_LIFE_BIRD', 
            payload: selectedBird
        })
        history.push('/lifeList')

    }

    function goToLifeList(){
        history.push('/lifeList');
    }
    return(
        <>
        <div className= "detailBirdContainer">
        <div className= "detailPageTitle">
        <div className="commonNameTitle"> 
        <h2> {selectedBird.Common_name}: </h2>
   
        <img 
            src= {selectedBird.image_path}
            width= {600}
            height={450}
        />
        </div>
        
         <div className="DetailPageDescription" > 
            <h3> Order: {selectedBird.Order} </h3>
            <h3> Family: {selectedBird.Family_name} </h3> 
            <h3> Species: {selectedBird.Scientific_name} </h3>
        </div>
      
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
                    <div className="cancelSubmit">
                    <div className="submitChange"> 
                    <h3>Submit Changes</h3>
                    <AddCircleIcon className="submitChangeBtn" sx={{ fontSize: 60 }}  onClick={editBirdDetail}> </AddCircleIcon>  
                    </div>
                    <div className="cancelBtn"> 
                    <div className="cancelChange" onClick={handleEditable}> 
                    <h3>Cancel</h3>
                    <CancelIcon className="submitChangeBtn" sx={{ fontSize: 60 }}  onClick={editBirdDetail}> </CancelIcon>
                    </div>
                    </div>
                    </div>
                    </div>
                }
          </div>
        {editable ===false ?
        <div className="btnBox">
        <div className= "LDetailButtons" ><h3> Edit Details </h3>
        <AutoFixHighIcon onClick={handleEditable} className="MUIeditBtn" sx={{ fontSize: 50 }} > Edit Details </AutoFixHighIcon> 
        </div>
        <div className="markAsSpotted" onClick={goToLifeList}> <h3> Fly Back To Life List</h3>
         <HomeIcon onClick={handleEditable} className= "MUIeditBtn" sx={{ fontSize: 50 }} >  </HomeIcon> 
         </div>
         </div>
         :
         <div> 
       
        </div>
        }
    
       </div>
        </>
    )
}
export default LifeListDetail;