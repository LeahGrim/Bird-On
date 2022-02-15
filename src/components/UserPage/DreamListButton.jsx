import { Link } from 'react-router-dom';

function DreamListButton (){
    return(
        <>
             <div className= "FormBtnTitle"> 
        <h1> Dream List Gallery </h1>
        <Link to='/dreamList'>
        <button className= "ToFormBtn">Go to Dream List</button>
        </Link>
        </div>
        </>
    )
}

export default DreamListButton;