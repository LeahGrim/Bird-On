import "../LifeList/LifeList.css";
import "./DreamList.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import DreamDeleteButton from "../DeleteButton/DreamDeleteButton.jsx";
import { useHistory, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function DreamList (){
    const list = useSelector(store => store.dreamListReducer);
  
    //Hooks
   const dispatch = useDispatch();
   const history = useHistory();
   const params = useParams(); 
  
   //establish editable toggle
   const [editable, setEditable] = useState(false);
 
   function handleEditable(){
     setEditable(!editable);
 }

// on page load a GET request is called to retrieve list of dreamList birds
    useEffect(()=> {
        dispatch({
            type: 'FETCH_DREAM_LIST'
          });
      }, [])

//client selects div and sends "bird" to handle Selected Bird
function handleSelectedBird(bird){
    
    history.push(`/dream/detail/${bird.id}`)
}

    return (
        <>
        <div className= "DreamListHeader">
        <h1> Birds Engrained In Your Dreams</h1>
            <h3 className= "DreamListHeader"> Count: 23 </h3>
            </div>
        <div> 
        {list && 
            <Grid container className= "dreamListContainer">
                {list.map((bird, index) => (
                    // on click of the entire image div, the selected bird will be sent to 
                    // selectedBird reducer via dispatch, and recalled at the DreamListDetail.jsx component
                    <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                                    <img 
                                        className= "birdImg"
                                        src= {bird.image_path}
                                        width= {500}
                                        height={350}
                                        onClick= {() => handleSelectedBird(bird)}
                                    />
                                    {/* BIRD COMMON NAME */}
                                     
                                 
                                       
                                    {editable === false ?
                                    <h2> {bird.Common_name} </h2> :
                                    <div>
                                    <h4> {bird.Common_name}</h4>
                                    <h4> Species Name:</h4> {bird.Scientific_name} 
                                    <h4> Family Name:</h4> {bird.Family_name} 
                                    <h4> Order:</h4> {bird.Order} 
                                    </div>
                                      }
                             <div className="birdNameTitle">         
                            <DreamDeleteButton bird= {bird} key={index}/>
                            {editable ===false ?      
                            <button onClick={handleEditable}>  <h4> Taxonomy Toggle </h4></button> :
                            <button onClick={handleEditable}> <h4> Taxonomy Toggle </h4></button>
                            }      
                             </div>
                                    
                    </div>
                ))}
            </Grid>
            }
        </div>
        </>
    )
}

export default DreamList; 