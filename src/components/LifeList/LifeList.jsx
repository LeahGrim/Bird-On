import "./LifeList.css";
import LifeListDescription from "./LifeListDescription.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import LifeListButton from "../DeleteButton/LifeListButton.jsx";
import DescriptionSection from "./DescriptionSection.jsx"
function LifeList (){
    //history of birds logged by the user as sighted birds
    //stored in the clientListReducer
    //data "got" from fetchClientListSaga
    const lifeList = useSelector(store => store.clientList);
    const user= useSelector(store => store.user);
    //setup dispatch
  const dispatch = useDispatch();
  //GOAL::   
  //defined a random variable (swap) to a true/false value so onClick of the div, 
  //the status of swap will switch between true and false 
  //when swap is true picture shows
  const[swap, setSwap] = useState(true);

function showDescription (){
    setSwap(!swap);
}
    useEffect(()=> {
        dispatch({
          type: 'FETCH_CLIENT_LIST'
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
        {lifeList && 
            <div className= "lifeListDiv">
                {lifeList.map((bird, index) => (
                    <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                               
                                    <img 
                                        src= {bird.image_path}
                                        width= {350}
                                        height={300}
                                        onClick= { showDescription }
                                    />
                                    
                                    {/* BIRD COMMON NAME */}
                                    <h2> {bird.Common_name} </h2>
                                    <LifeListButton bird= {bird} key={index}/>
                                    <DescriptionSection bird= {bird} key={index} /> 
                                    <div className="containerForBirdDescription" key={index} >
                                      
                                    </div>
                    </div>
            
               ))} 
            </div>
            }
        </div>
        </>
    )
}

export default LifeList; 