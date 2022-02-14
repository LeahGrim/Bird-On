import { Link } from 'react-router-dom';

function DreamListButton (){
    return(
        <>
             <div className= "FormBtnTitle"> 
        <h1> View the Gallery of Birds Engrained In Your Dreams  </h1>
        <Link to='/dreamList'>
        <button className= "ToFormBtn"><h2>Go to Dream List</h2></button>
        </Link>
        </div>
        </>
    )
}

export default DreamListButton;