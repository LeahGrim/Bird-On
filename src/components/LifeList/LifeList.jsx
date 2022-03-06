import "./LifeList.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
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
//deleteBird function that sends the id of the bird to delete to the DELETE req in getList router
function deleteBird(id){
  dispatch({
      type: 'DELETE_LIFE_BIRD',
      payload: id
  })

}
    return (
        <>
       
            
        <div className= "ListHeader">
        <h1 className="ListTitleHeading"> Life List </h1> 
        <h3> Count: 43 </h3>
        <h3></h3>
        </div>
{/* DISPLAY TOTAL COUNT */}
 {/* <h2> Total Count: </h2> */}
 {/* IN THE input have an onchange that grabs the text from the input and sets that to dispatch reducer 
 establish a get request that uses a where clause taht when two things are alike  */}
        <div className= "lifeListFilter"> 
            <h2> Sort By:</h2>
            <label> <strong>Year </strong><input placeholder="Year"> 
            </input> </label>
            <label> <strong>Order </strong><input placeholder="Order"> 
            </input> </label>
            <label> <strong>Family </strong><input placeholder="Order"> 
            </input> </label>
            <label> <strong>Location </strong><input placeholder="Order"> 
            </input> </label>
          </div>
       {/* list listcontainer becomes grid container */}
        <div className="lifeListContainer"> 
        {lifeList && 
        // life list div becomes grid container
            // <div className= "lifeListDiv">
            <Grid container className="lifeListContainer"> 
                {lifeList.map((bird, index) => (
                  //  grid item  
                   <div className="birdImage" key= {index}>   
                                    {/* IMAGE OF BIRD */}
                                    {/* card media  */}
                                    <div className="birdImg">
                                    <img 
                                        src= {bird.image_path}
                                        width= {400}
                                        height={350}
                                        onClick= {() => handleSelectedBird(bird) }
                                    />
                                    </div>
                                    {editable === false ?
                                    <h1 className= "commonNameTtl"> {bird.Common_name} </h1> :
                                    <div className="taxonomyToggle">
                                    <h4 className="commonNameTtl"> {bird.Common_name}</h4>
                                    <h4 className="order"> Order:</h4> <div className="order">{bird.Order} </div>  <br/>
                                    <h4 className="family"> Family Name: </h4> <div className="family">{bird.Family_name} </div> <br/>
                                    <h4 className="species"> Species Name:</h4> <div className="species"> {bird.Scientific_name} </div>
                                   
                                   
                                    </div>
                                      }
                            {editable ===false ?      
                            <div className= "toggleDlt"> 
        <button onClick={handleEditable}>  <h4> Taxonomy Toggle </h4></button> 
        <DeleteIcon fontSize= "large" onClick={() => deleteBird(bird.bird_id)}> </DeleteIcon>

        </div>
        :
        <button onClick={handleEditable}> <h4> Taxonomy Toggle </h4></button>
                            } 
                    </div>
            
               ))} 
            </Grid>
            
            }
  
         </div>
        </>
    )
}

export default LifeList; 