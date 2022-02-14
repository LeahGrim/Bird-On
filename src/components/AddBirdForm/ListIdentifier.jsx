import "./AddBirdForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory, Link } from 'react-router-dom';


function ListIdentifier(){


    return(
        <>
 < Link to='/date'>
 <button> Life List </button>
 </Link>  
 <Link to='/common'>
 <button> Dream List</button>                    
</Link>
        </>
    )
}

export default ListIdentifier