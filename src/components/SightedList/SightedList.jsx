import "./SightedList.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";


function SightedList (){
    const list = useSelector(store => store.clientList);
    console.log('list is', list);
    return (

        <></>
    //     <>
    //   {list && 
    //   <div className= 'pictureListDiv'>
    //      {list.map((bird, index) => (
    //          <h2> {bird} </h2>


    //      ))}
         
         
    //      } </div>}
    //     </>
    )
}

export default SightedList; 