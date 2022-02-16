import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
 
  const lifeList = useSelector(store => store.clientList);
  console.log('client list is ', lifeList);
  
  //setup dispatch
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({
      type: 'FETCH_CLIENT_LIST'
    });
  }, [])

  return (
      
      <img 
            src= {lifeList[0].image_path}
            width= {350}
            height={300}
        />
  )
}

export default AboutPage;
