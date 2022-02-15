
import "./LifeList.css";
import LifeListDescription from "./LifeListDescription.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function DescriptionSection({bird}) {



    return(
        <>
   
        <div>
        <h3> Order: {bird.Order} </h3>
        <h3> Family: {bird.Family_name}</h3>
        <h3> Scientific Name: {bird.Scientific_Name} </h3>
        <h3> Sighting Date: {bird.date_spotted} </h3>
        <h3> Bird Notes: {bird.description}</h3>
        <h3> Location Spotted: {bird.location_spotted} </h3> 
        </div>
x
    
        </>
    )
}
export default DescriptionSection;