import { Button } from "../button/button";
import React from "react";
import './login.css';
const Login = () => {
    const url = 'http://localhost:8000/server/autenthication/login';
    const mostrarPass = () => {
        let tipo = document.getElementById("password");
        if (tipo == "password") tipo = "text";
        else tipo = "password";
    }
    return (
        <div className="main">
            <div className="logo">
                <p className="d"></p>
            </div>
            <h3 className="logoL">Plagio Control</h3>
            <h1 className="titulo">Login Plagio Control</h1>
            <p className="comentario">Enter you email and password below</p>
            <form>
                <div className="conjunto">
                    <label htmlFor="">EMAIL</label>
                    <input className="dato" type="text" placeholder="Email address" />
                </div>
                <div className="conjunto">
                    <label htmlFor="">PASSWORD</label>
                    <a href="" className="olvidaste">Forgot password?</a>
                    <input className="dato" type="text" placeholder="Password" id="password" />
                    <button className="ojoB" onClick={mostrarPass}>
                        <img className="ojo" src="https://cdn-icons-png.flaticon.com/512/7042/7042918.png" />
                    </button>
                </div>
                <div className="boton">
                    <Button label={'Log In'} size={'md'}/>
                </div>
                <div>
                    <a href="">No tienes una cuanta</a>
                    &nbsp;&nbsp;
                    <a href="" className="singup">Sing up</a>
                </div>
            </form>
        </div>
    )
}

export default Login;