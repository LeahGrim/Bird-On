import "../LifeList/LifeList.css";
import "./DreamList.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import DreamDeleteButton from "../DeleteButton/DreamDeleteButton.jsx";

function DreamList (){
    const list = useSelector(store => store.dreamListReducer);
    console.log('list is', list);
  //setup dispatch
  const dispatch = useDispatch();

function showDescription (){
    console.log('we are in show description')
}
    useEffect(()=> {
        dispatch({
            type: 'FETCH_DREAM_LIST'
          });
      }, [])

    return (
        <>
        <div className= "LifeListHeader">
        <h1> Birds Engrained In Your Dreams</h1>
        </div>
        <div className= "filter">
            <input placeholder="Filter by Order"> 
            </input>
            <input placeholder="Filter by Family"> 
            </input>
            <input placeholder="Filter by Year"> 
            </input>
            <h3> Count: </h3>
        </div>
        <div className="lifeListContainer"> 
        {list && 
            <div className= "lifeListDiv">
                {list.map((bird, index) => (
                    <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                                    <img 
                                        
                                        src= {bird.image_path}
                                        width= {350}
                                        height={300}
                                        onClick= { showDescription }
                                    />
                                    {/* BIRD COMMON NAME */}
                                    <div className="birdCommonNameTitle"> 
                                    <h2> {bird.Common_name} </h2>
                                    <DreamDeleteButton bird= {bird} key={index}/>
                                    <button> Spotted! </button>
                                    </div>        
                                    {/* DESCRIPTION CONTENT FOR BIRD */}
                                    <div className="containerForBirdDescription" > 
                                        <h3> Order: {bird.Order} </h3>
                                        <h3> Family: {bird.Family_name} </h3> 
                                        <h3> Species: {bird.Scientific_name} </h3>
                                        <h3> What Was The Bird Doing? (your notes): {bird.description}</h3>
                                      
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