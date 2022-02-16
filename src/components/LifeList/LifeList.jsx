import "./LifeList.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

function LifeList (){
    //history of birds logged by the user as sighted birds
    //stored in the clientListReducer
    //data "got" from fetchClientListSaga
    const lifeList = useSelector(store => store.clientList);
    const user = useSelector(store=> store.user)
  
    //Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams(); 
  
  const [editable, setEditable] = useState(false);
 
  function handleEditable(){
    setEditable(!editable);
}

//on page load, client list is generated from getList Saga
//common names are also generated for autocomplete 
    useEffect(()=> {
        dispatch({
          type: 'FETCH_CLIENT_LIST'
        });
        dispatch({
          type: 'FETCH_COMMON_NAMES'
        });
      }, [])


 //client selects div and sends "bird" to handle Selected Bird
function handleSelectedBird(bird){
  //declare dispatch to send selected bird to selectedBird reducer
  dispatch({
      type: 'SET_DETAIL_BIRD', 
      payload: bird, params
  })
  //once the info is sent to reducer, send client to /details page
  history.push(`/life/detail/${bird.id}`)
}

    return (
        <>
        <div className= "LifeListHeader">
        <h1> Life List </h1> 
        </div>
{/* DISPLAY TOTAL COUNT */}
 {/* <h2> Total Count: </h2> */}
        <div className= "lifeListFilter"> 
           <input placeholder="Filter by Order"> 
            </input>
            <input placeholder="Filter by Family"> 
            </input>
            <input placeholder="Filter by Year"> 
            </input>
          </div>
       {/* list listcontainer becomes grid container */}
        <div className="lifeListContainer"> 
        {lifeList && 
        // life list div becomes grid container
            <div className= "lifeListDiv">
                {lifeList.map((bird, index) => (
                  //  grid item  
                   <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                                    {/* card media  */}
                                    <img 
                                        src= {bird.image_path}
                                        width= {350}
                                        height={300}
                                        onClick= {() => handleSelectedBird(bird) }
                                    />
                                    {editable === false ?
                                    <h2> {bird.Common_name} </h2> :
                                    <div>
                                    <h4> {bird.Common_name}</h4>
                                    <h4> Species Name:</h4> {bird.Scientific_name} 
                                    <h4> Family Name: </h4>{bird.Family_name} 
                                    <h4> Order:</h4>  {bird.Order} 
                                    </div>
                                      }
                            {editable ===false ?      
        <button onClick={handleEditable}>  <h4> Taxonomy Toggle </h4></button> :
        <button onClick={handleEditable}> <h4> Taxonomy Toggle </h4></button>
                            } 
                    </div>
            
               ))} 
            </div>
            }
            
        </div>
        </>
    )
}

export default LifeList; 