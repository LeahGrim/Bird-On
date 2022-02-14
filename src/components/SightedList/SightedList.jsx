import "./SightedList.css";
import LifeListDescription from "./LifeListDescription.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";


function SightedList (){
    const list = useSelector(store => store.clientList);
    const user= useSelector(store => store.user);

    console.log('list is', list);
    //setup dispatch
  const dispatch = useDispatch();

function showDescription (){
    console.log('we are in show description')
}
    useEffect(()=> {
        dispatch({
          type: 'FETCH_CLIENT_LIST', 
          payload: user.id
        });
        dispatch({
          type: 'FETCH_COMMON_NAMES'
        });
      }, [])

    return (
        <>
        <div className= "LifeListHeader">
        <h1> Life List </h1>
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
                                    </div>        
                                    {/* DESCRIPTION CONTENT FOR BIRD */}
                                    <div className="containerForBirdDescription" > 
                                        <h3> Order: {bird.Order} </h3>
                                        <h3> Family: {bird.Family_name}</h3>
                                        <h3> Scientific Name: {bird.Scientific_Name} </h3>
                                        <h3> Sighting Date: {bird.date_spotted} </h3>
                                        <h3> Bird Notes: {bird.description}</h3>
                                        <h3> Location Spotted: {bird.location_spotted} </h3>
                                    </div>
                    </div>
                ))}
            </div>
            }
        </div>
        </>
    )
}

export default SightedList; 