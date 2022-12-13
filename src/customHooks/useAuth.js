import { useState,useEffect } from "react";
import axios from "axios";


const useAuth=()=>{
    const [isAuth,setIsAuth]=useState(false)
    const [result,setResult]=useState(false)


    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(!token) {
            setIsAuth(false)
            setResult(true)
        }
        if(token){
            axios.get(`http://localhost:3004/user/verify-token/${token}`)
            .then(res => {
                if(res.data?.status === 200){
                    console.log(".....")
                    setIsAuth(true)
                }
                else{
                    setIsAuth(false)
                }
                setResult(true)
            })
            .catch(err=>{
                setIsAuth(false)
                setResult(true)
            })
        }
    },[])
    return {isAuth,result}
}

export default useAuth