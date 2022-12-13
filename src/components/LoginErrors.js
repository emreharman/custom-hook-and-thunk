import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearError } from "../redux/actions/loginActions";

const LoginErrors=()=>{
    const {loginState}=useSelector(state=>state)
    const dispatch=useDispatch()
    return(
        <div style={{
            position:"absolute",
            top:0,
            left:0,
            width:"100%",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"rgba(0,0,0,0.3)",
            zIndex:1
        }}>
            <div style={{
                width:"50%",
                padding:"30px 50px",
                backgroundColor:"#fff"
            }}>
                <p>{loginState.error}</p>
                <button onClick={()=>dispatch(clearError())}>Kapat</button>
            </div>
        </div>
    )
}

export default LoginErrors