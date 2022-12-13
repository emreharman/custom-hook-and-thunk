import React from "react";

const Loading=()=>{
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
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading