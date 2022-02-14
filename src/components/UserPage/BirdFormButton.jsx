import './ButtonStyle.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function BirdFormButton(){
    return(
        <>
        <div className= "FormBtnTitle"> 
        <h1> Have You Spotted A Bird? </h1> 
        <h1> Dreaming of Seeing a Specific Bird?  </h1>
        </div>
        <div>
        <Link to= "/listIdentifier">
        <button className= "ToFormBtn"><h2> Add Bird to List</h2></button>
        </Link>
      <br/> 
         </div>
        </>
    )
};
export default BirdFormButton