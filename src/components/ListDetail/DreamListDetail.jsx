import "./DetailView.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HomeIcon from '@mui/icons-material/Home';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function DreamListDetail(){
    const selectedBird = useSelector((store) => store.setSelectedBird) 
    console.log('selectedBird is ', selectedBird)

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
       console.log('in editBirdDetail');
        dispatch ({
            type: 'EDIT_LIFE_BIRD', 
            payload: selectedBird
        })
        history.push('/dreamList')

    }

    //on click of fly back to dream list
    function goToDreamList(){
        history.push('/dreamList')
    }
    return(
        <>
        <div className= "detailBirdContainer">
        <div className= "detailPageTitle"> 
        <div className="commonNameTitle"> 
        <h2> {selectedBird.Common_name}: </h2>
        
        <img 
            src= {selectedBird.image_path}
            width= {750}
            height={600}
        />
        </div>
         <div className="DetailPageDescription" > 
            <h3> Order: </h3>{selectedBird.Order} 
            <h3> Family:</h3>  {selectedBird.Family_name}  
            <h3> Species: </h3>{selectedBird.Scientific_name} 
            <h3> Notes on Bird: </h3> {selectedBird.description}
            
        </div>
        </div>
        {editable === false ?
           <div></div>
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
                    <div></div>: 
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
            <div></div> :
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
        
        {editable ===false ?
        <div className="btnBox">
            <div className="markAsSpotted"> <h3> Mark as Spotted </h3>
                <RemoveRedEyeIcon onClick={handleEditable} sx={{ fontSize: 50 }}>  </RemoveRedEyeIcon> 
            </div> 
            <div className="markAsSpotted" onClick={goToDreamList}> <h3> Fly Back To Dream List</h3>
               <HomeIcon onClick={handleEditable} className= "MUIeditBtn" sx={{ fontSize: 50 }} >  </HomeIcon> 
            </div>
        </div>
        
         :
        <div></div>
        }
        
        </div>
        </>
    )
}
export default DreamListDetail;