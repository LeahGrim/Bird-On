import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function LifeListDescription({list, index}){
    console.log('life list is', list)
    return(
    <>
    <div className="containerForBirdDescription" > 
        <h3> {list.Order}</h3>
        <h3> {list.Family_name}</h3>
        <h3> {list.Scientific_Name} </h3>
        <h3> {list.date_spotted} </h3>
        <h3> {list.description}</h3>
        <h3> {list.location_spotted} </h3>
    </div>
    </>
    )
}
export default LifeListDescription;