import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login =()=>{
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const handleLogin = ()=>{
        console.log("Hence sucessfully logged In",email)
    }

    return(
        <div className="Login">
            <h1>Login</h1>
            <input type="email" className="inputBox" placeholder="Email" autoComplete="off" />              
            <input type="password" className="inputBox" placeholder="Password"/>
            {/* <button onClick={handleLogin} className="signup_btn">Login</button>  */}
            <Link className="link">Forget Password</Link>   
        </div>
    )
    }

    export default Login