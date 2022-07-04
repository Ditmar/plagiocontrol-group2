import React from 'react';
import './DocumentCard.css'
function DocumentCard({name, description, numberPage, imagePage}) {
    return (
        <div className='container'>
            <div className='container-documentCard'>
                <div className='container-documentCard-text'>
                    <p className='title-documentCard'>Autor {name}</p>
                    <p className='description-documentCard'>{description}</p>
                    <p className='page-documentCard'>{numberPage} Page</p>
                    <hr className='underlined'></hr>
                </div>
                
                <div className='container-documentCard-image'>
                    <p className='details-documentCard'>Ver detalles</p>
                    <img className='image-documentCard' src={imagePage} alt='Tesis Image'/>
                </div>
            </div>
        </div>
    );
}

export default DocumentCard;