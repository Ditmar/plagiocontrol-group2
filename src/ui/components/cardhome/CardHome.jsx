import React from 'react';
import './CardHome_story.css';

export const CardHome = ({title1='Documentos',number1='60',title2='Revisados', number2='50',title3='Copias Detectadas',number3='40'}) => {
    return (
    <div className="container">

        <Card
        title={title1}
        number={number1}/>

        <Card
        title={title2}
        number={number2}/>

        <Card
        title={title3}
        number={number3}/>
    </div>
        
    )

}

export function Card ({title, number}){
    return(
        <div className="box">
            <div className="box-body">
                <h2 className="box_title"> {title}</h2>
                <h1 className="box_number">{number}</h1>
            </div>
        </div>
    );

}
