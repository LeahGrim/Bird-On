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
        <div className= "LifeListHeader">
        <h1> Life List </h1> 
        </div>
{/* DISPLAY TOTAL COUNT */}
 {/* <h2> Total Count: </h2> */}
 {/* IN THE input have an onchange that grabs the text from the input and sets that to dispatch reducer 
 establish a get request that uses a where clause taht when two things are alike  */}
        <div className= "lifeListFilter"> 
           {/* <input placeholder="Filter by Order"> 
            </input>
            <input placeholder="Filter by Family"> 
            </input> */}
            <input placeholder="Filter by Year"> 
            </input>
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
                                    <div className="imgDiv">
                                    <img 
                                        src= {bird.image_path}
                                        width= {350}
                                        height={300}
                                        onClick= {() => handleSelectedBird(bird) }
                                    />
                                    </div>
                                    {editable === false ?
                                    <h2 className= "commonNameTtl"> {bird.Common_name} </h2> :
                                    <div>
                                    <h4> {bird.Common_name}</h4>
                                    <h4> Order:</h4>  {bird.Order} 
                                     <h4> Family Name: </h4>{bird.Family_name} 
                                    <h4> Species Name:</h4> {bird.Scientific_name} 
                                   
                                   
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