import "./DetailView.css";
import { useSelector } from "react-redux";
import React from "react";
import { useHistory } from 'react-router-dom';

function DreamListDetail(){
    const selectedBird = useSelector((store) => store.setSelectedDreamBird) 
    console.log('selectedBird is ', selectedBird)
    //establish history to later send the user back to the dreamList view
    const history = useHistory();

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
            <h3> Notes on Bird: {selectedBird.description}</h3>
            
        </div>
        </>
    )
}
export default DreamListDetail;