import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import useAuth from "../customHooks/useAuth";



const CVs=()=>{
    const {isAuth,result}=useAuth()
    const navigate=useNavigate()


    if(result && !isAuth){
        navigate("/login")
    }
    
    return(
        <div>
            <Header />
            <h1>CVs</h1>
        </div>
    )
}

export default CVs