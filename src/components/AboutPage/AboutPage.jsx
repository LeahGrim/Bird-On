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
    <>
      <div className="infoBoxList">
          <div className="infoTitle"> 
            <h2 className="listInfoHeading"> Technologies Implemented </h2>
            <h3 className="listItem" > • React js / Material UI</h3>
            <h3 className="listItem" > • Node js  / PostgreSQL  </h3>
            <h3 className="listItem" > • Javascript / Html / CSS </h3>
            <h3 className="listItem" > • Flickr API</h3>
          <img 
                src= {'https://c8.alamy.com/zooms/9/e597a25d4be94a6b8d5362d833b92f97/ry9t2b.jpg'}
                width= {500}
                height={420}
                className="OwlPic"
            />
          </div>
      
      <div className="infoTitle"> 
        <h2 className="infoHeading"> Bird On, a Life List Generator</h2>
        <h3 className="topBorder" > An app built to mitigate messy and un-trackable record-keeping of birds sighted in one's lifetime </h3>
        <h3 className="listItem" > </h3>
        <h3 className="listItem" > </h3>
      <img 
            src= {'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/screech-owl-family-justin-battles.jpg'}
            width= {500}
            height={500}
            className="OwlPic"
        />
      </div>
        
          <div className="infoTitle"> 
            <h2 className="listInfoHeading"> Acknowledgments </h2>
            <h3 className="listItem" > • World IOC Bird List </h3>
            <h3 className="listItem" > • Woodall Cohort </h3>
            <h3 className="listItem" > • Prime Instructors / Support Staff </h3>
          <img 
                src= {'https://birdfeederhub.com/wp-content/uploads/2019/09/barn-owl.jpg'}
                width= {500}
                height={450}
                className="OwlPic"
            />
          </div>
          </div>
          <div className="footerInfo">
            <h3> App Creator :: Leah Grim </h3>
            <h3> Find Me on Github :: https://github.com/LeahGrim </h3>
            <h3> Find Me on LinkedIn :: https://www.linkedin.com/in/leah-grim-846875218/ </h3>
          </div>
          </>
  )
}

export default AboutPage;
