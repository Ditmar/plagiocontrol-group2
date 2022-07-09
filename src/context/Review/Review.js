import React from "react";
import './Review.css';
import { UploadFiles } from "../../ui/components/uploadFiles/UploadFiles";

export const Review = () => {
    return (
        <div>
            Review Page
            <div className="boxtitle">
                <h1 className="title">
                    Revisar Tesis
                </h1>
            </div>
            <div className="boxtext">
                    
                    <p className="text">
                        Suba el documento pdf del trabajo que desea revisar, el sistema verifica similaridad 
                        de los documentos contenidos en la base de datos, ya depende del tutor tomar 
                        desiciones sobre dicho trabajo.
                    </p>
            </div>
            <UploadFiles />
        </div>
    )
}