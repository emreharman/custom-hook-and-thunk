import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import useAuth from "../customHooks/useAuth";

const Register=()=>{
    const {result,isAuth}=useAuth()
    const navigate=useNavigate()

    if(result && isAuth) navigate("/")
    return(
        <div>
            <Header />
            <h1>Register</h1>
        </div>
    )
}

export default Register