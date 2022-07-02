import React from 'react';
import "./CardHome_story.css";

export const CardHome = () => {
    return (
    <div className="container">

        <Card
        title="Documentos"
        number="60"/>

        <Card
        title="Revisados"
        number="50"/>

        <Card
        title="Copias detectadas"
        number="40"/>
    </div>
        
    )

}
function Card (props){
    return(
        <div className="box">
            <div className="box-body">
                <h2 className="box_title"> {props.title}</h2>
                <h1 className="box_number">{props.number}</h1>
            </div>
        </div>
    )

}