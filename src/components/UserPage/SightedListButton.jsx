import { HashRouter as Router, Route, Link } from 'react-router-dom';


function SightedListButton(){
    return(
        <>
        <div className='FormBtnTitle'> 
            <h1> View Your Life List </h1>
            <Link to= '/lifeList'>
            <button className= "ToFormBtn"> <h2> Go To Life List </h2> </button>
            </Link>
        </div>
        </>
    )
}
export default SightedListButton;