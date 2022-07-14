import React from 'react';
import './login.css';
import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import axios from 'axios';


const LoginUI = () => {
    const [form, handlerChangeForm] = useForm({email:'', password:''});
    const { email, password } = form;
    let seePass = 'password';
    
    //const urldb = 'http://localhost:8000/server/autenthication/login';
    /* 
    The API crashed a lot, for this reason an API was used with the same parameters as the main API
    */
    const url = 'http://localhost:3001/usuario';

    const startSesion = async(email, password) => {
        await axios.get(url, {params: {email: email, password: password}})
        .then(response=>{
            console.log(response.data);
        });
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        //console.log('email:',email,'pass:',password);
        startSesion(email,password);
    }

    const seePassword = () => {
        if (seePass === "password") seePass = "text";
        else seePass = "password";
    }
    return (
        <div className="main">
            <div className="logo">
                <p className="d"></p>
            </div>
            <h3 className="logoL">Plagio Control</h3>
            <h2 className="tit">Login Plagio Control</h2>
            <p className="comment">Enter you email and password below</p>
            <form onSubmit={handlerSubmit}>
                <div className="con">
                    <label htmlFor="">EMAIL</label>
                    <input className="in" type="text" placeholder="Email address" name="email" onChange={handlerChangeForm} />
                </div>
                <div className="con">
                    <label htmlFor="">PASSWORD</label>
                    <a href="" className="forgot">Forgot password?</a>
                    <input className="in" type={seePass} placeholder="Password" name="password" onChange={handlerChangeForm} />
                    <button className="eyeB" onClick={seePassword}>
                        <img className="eye" src="https://cdn-icons-png.flaticon.com/512/7042/7042918.png" />
                    </button>
                </div>
                <button className="button">Log In</button>
                <div>
                    <a>No tienes una cuanta?</a>
                    &nbsp;&nbsp;
                    <a href="/Register" className="singup">Sing up</a>
                </div>
            </form>
        </div>
    )
}

export default LoginUI;