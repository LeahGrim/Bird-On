import "../LifeList/LifeList.css";
import "./DreamList.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import DreamDeleteButton from "../DeleteButton/DreamDeleteButton.jsx";
import { useHistory, useParams } from 'react-router-dom';

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
    //declare dispatch to send selected bird to selectedBird reducer
    dispatch({
        type: 'SET_DETAIL_BIRD', 
        payload: bird, params
    })
    //once the info is sent to reducer, send client to /dream/details page
    history.push(`/dream/detail/${bird.id}`)
}

    return (
        <>
        <div className= "LifeListHeader">
        <h1> Birds Engrained In Your Dreams</h1>
        </div>
        <div className= "filter">
            {/* <input placeholder="Filter by Order"> 
            </input>
            <input placeholder="Filter by Family"> 
            </input>
            <input placeholder="Filter by Year"> 
            </input> */}
            <h3> Count: </h3>
        </div>
        <div className="lifeListContainer"> 
        {list && 
            <div className= "lifeListDiv">
                {list.map((bird, index) => (
                    // on click of the entire image div, the selected bird will be sent to 
                    // selectedBird reducer via dispatch, and recalled at the DreamListDetail.jsx component
                    <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                                    <img 
                                        
                                        src= {bird.image_path}
                                        width= {400}
                                        height={350}
                                        onClick= {() => handleSelectedBird(bird)}
                                    />
                                    {/* BIRD COMMON NAME */}
                                     
                                 
                                       
                                    {editable === false ?
                                    <h2> {bird.Common_name} </h2> :
                                    <div>
                                    <h4> {bird.Common_name}</h4>
                                    <h4> Species Name: {bird.Scientific_name} </h4>
                                    <h4> Family Name: {bird.Family_name} </h4>
                                    <h4> Order: {bird.Order} </h4>
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
            </div>
            }
        </div>
        </>
    )
}

export default DreamList; 