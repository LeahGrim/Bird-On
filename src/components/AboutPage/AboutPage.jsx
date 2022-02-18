import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import './AboutPage.css'
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
      <div className="infoTitle"> 
        <h2 className="infoHeading"> Bird On, a Life List Generator for Birders</h2>
        <h3 className="topBorder" > An app built to mitigate messy and un-trackable record-keeping of birds sighted in one's lifetime </h3>
      <img 
            src= {lifeList[20].image_path}
            width= {500}
            height={500}
            className="OwlPic"
        />
      </div>
  )
}

export default AboutPage;
