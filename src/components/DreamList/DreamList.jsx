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
        <div className= "ListHeader">
        <h1 className="ListTitleHeading"> Birds Engrained In Your Dreams</h1>
            <h3> Count: 23 </h3>
            </div>
        {/* DISPLAY TOTAL COUNT */}
 {/* <h2> Total Count: </h2> */}
 {/* IN THE input have an onchange that grabs the text from the input and sets that to dispatch reducer 
 establish a get request that uses a where clause taht when two things are alike  */}
     
     {/* FILTER PREP -- FOR FUTURE ADAPTATION */}
            {/* <div className= "lifeListFilter"> 
                <h2> Sort By:</h2>
                <label> <strong>Order </strong><input placeholder="Order"> 
                </input> </label>
                <label> <strong>Family </strong><input placeholder="Order"> 
                </input> </label>
            
            </div> */}
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
                                        width= {450}
                                        height={350}
                                        onClick= {() => handleSelectedBird(bird)}
                                    />
                                    {/* BIRD COMMON NAME */}
                                     
                                 
                                       
                                    {editable === false ?
                                    <h2 className="commonName"> {bird.Common_name} </h2> :
                                    <div>

                                    <h4> {bird.Common_name}</h4>
                                    <h4 className="order"> Order:</h4> <div className="order"> {bird.Order} </div> <br/>
                                    <h4 className="family"> Family Name:</h4> <div className="family"> {bird.Family_name} </div> <br/>
                                    <h4 className="species"> Species Name:</h4> <div className="species"> {bird.Scientific_name} </div>
                                    
                                  
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