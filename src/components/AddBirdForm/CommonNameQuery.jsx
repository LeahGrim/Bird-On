import { useDispatch, useSelector } from "react-redux";

function CommonNameQuery(){
    // goals:
    //load reducer with common name and id 
    const commonNameList = useSelector(store => store.commonNameReducer); 
    
console.log('common Name List is ', commonNameList);
    // save reducer as an empty array 
    //put the common name and id into the reducer 
    return(
        <>
        
        </>
    )
}
export default CommonNameQuery;