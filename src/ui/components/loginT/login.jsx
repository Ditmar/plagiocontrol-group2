import React from "react";
import './login.css';
import { useState } from "react";
import useForm from "../../../hooks/useForm";


const LoginUI = () => {
    const [form, handlerChangeForm] = useForm({user:'', password:''});
    const { user, password } = form;
    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log('user:',user,'pass:',password);
    }
    //const urldb = 'http://localhost:8000/server/autenthication/login';
    /*const [us, setUs] = useState('');
    const [pass, setPass] = useState('');
    const handlerChange = (name, value) => {
        if (name === 'user')    setUs(value);
        else setPass(value);
    }
    const handlerSubmit = () => {
        let valor = { us, pass};
        if (valor) {
            //console.log('valor:',valor);
            Validar(valor);
        }
    }
    (e) => handlerChange(e.target.name, e.target.value)
    const Validar = (parametro) => {
        
    }*/

    
    //console.log('Usuario:', us);
    //console.log('Usuario:', pass);
    const mostrarPass = () => {
        let tipo = document.getElementById("password");
        console.log(tipo);
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
            <form onSubmit={handlerSubmit}>
                <div className="conjunto">
                    <label htmlFor="">EMAIL</label>
                    <input className="dato" type="text" placeholder="Email address" name="user" onChange={handlerChangeForm} />
                </div>
                <div className="conjunto">
                    <label htmlFor="">PASSWORD</label>
                    <a href="" className="olvidaste">Forgot password?</a>
                    <input className="dato" type="password" placeholder="Password" name="password" id="password" onChange={handlerChangeForm} />
                    <button className="ojoB">
                        <img className="ojo" src="https://cdn-icons-png.flaticon.com/512/7042/7042918.png" />
                    </button>
                </div>
                <button className="boton">Log In</button>
                <div>
                    <a href="">No tienes una cuanta</a>
                    &nbsp;&nbsp;
                    <a href="" className="singup">Sing up</a>
                </div>
            </form>
        </div>
    )
}

export default LoginUI;