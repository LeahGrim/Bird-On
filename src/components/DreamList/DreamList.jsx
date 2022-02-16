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
   

function showDescription (){
    console.log('we are in show description')
}
// on page load a GET request is called to retrieve list of dreamList birds
    useEffect(()=> {
        dispatch({
            type: 'FETCH_DREAM_LIST'
          });
      }, [])
function moveToLifeList(){
    console.log('we are here in the life list button')
}
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
                                        width= {350}
                                        height={300}
                                        onClick= {() => handleSelectedBird(bird)}
                                    />
                                    {/* BIRD COMMON NAME */}
                                    <div className="birdCommonNameTitle"> 
                                    <h2> {bird.Common_name} </h2>
                                    <DreamDeleteButton bird= {bird} key={index}/>
                                    <button onClick={moveToLifeList}> Spotted! </button>
                                    </div>        
                                    {/* DESCRIPTION CONTENT FOR BIRD */}
                                 
                                 {/* have quick pop up with this information */}
                                    {/* <div className="containerForBirdDescription" > 
                                        <h3> Order: {bird.Order} </h3>
                                        <h3> Family: {bird.Family_name} </h3> 
                                        <h3> Species: {bird.Scientific_name} </h3>
                                        <h3> What Was The Bird Doing? (your notes): {bird.description}</h3>
                                      
                                    </div> */}
                    </div>
                ))}
            </div>
            }
        </div>
        </>
    )
}

export default DreamList; 