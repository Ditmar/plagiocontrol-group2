import React from "react";
import Title from "../../hooks/Title";
import Usuario from "../../hooks/Usuario";
import "../../Review.css";
import Busqueda from "../../hooks/Busqueda";
import Bell from "../../hooks/Bell";


export const Review = () => {

    const user= {
        nombre:'Lisa Marie Simpsom​',
        urlImagen: 'https://i.pinimg.com/736x/25/36/35/253635aa6fe30a74ce5833fa99659a54.jpg',
    };


    return (
        <div className="padre">
            <div className="hijo"><Title Pagina="/ Header" /></div>
            <div className="hijo"><Busqueda /></div>
            <div className="hijo"><Bell /> </div>
            <div className="hijo"> <Usuario user={user}/></div>
        </div>
        
     
        
    )
}