import { HashRouter as Router, Route, Link } from 'react-router-dom';


function LifeListButton(){
    return(
        <>
        <div className='FormBtnTitle'> 
          <thead> 
              <tr>
                  <th> View Your Life List</th>
                  <th> Dream List Gallery</th>
                  <th> Add Bird Sighting </th>
                  <th>Add A Bird to Your Dream List </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <th> <Link to= '/lifeList'><button className= "ToFormBtn"> 
                            <h2> Life List </h2> 
                     </button></Link>
                </th>
                <th> <Link to= '/dreamList'><button className= "ToFormBtn"> 
                            <h2> Dream List </h2> 
                     </button></Link>
                </th>
                <th> <Link to= '/form'><button className= "ToFormBtn"> 
                            <h2> Dream List Form </h2> 
                     </button></Link>
                </th>
                <th> <Link to= '/form'><button className= "ToFormBtn"> 
                             Life List Form  
                     </button></Link>
                </th>
              </tr>
          </tbody>
            <h1> View Your Life List </h1>
            <Link to= '/lifeList'>
            <button className= "ToFormBtn"> <h2> Life List </h2> </button>
            </Link>
        </div>
        </>
    )
}
export default LifeListButton;