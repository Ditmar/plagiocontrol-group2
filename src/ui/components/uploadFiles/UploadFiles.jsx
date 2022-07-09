import { React, useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { ImagePdf } from './config/ImageConfig';
import { BsTrash2Fill } from 'react-icons/bs';

import './UploadFiles.css';

export const UploadFiles = props => {
    const [myFiles, setMyFiles] = useState([])
    
    const onDrop = useCallback(acceptedFiles => {
        setMyFiles([...myFiles, ...acceptedFiles])
        console.log(acceptedFiles)
    }, [myFiles])

    const {
        acceptedFiles, 
        getRootProps, 
        getInputProps
            } = useDropzone({
                accept:{'aplication/pdf': ['.pdf']},
                noClick: true,
                onDrop
    });

    const removeFile = file => () => {
        /*const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)*/
        
        acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
        console.log('eliminado',acceptedFiles)
    }
    
    return (
        <section>
            <div {...getRootProps({className: 'container'})}>
                <input {...getInputProps()} />
                {
                    acceptedFiles.length > 0 ? (
                        <div className="dropfilespreview">
                            {acceptedFiles.map(file => (
                                <div key={file.path} className="dropfilespreview__item">
                                    <div className="dropfilespreview__item__info">
                                        <div className="dropfilepreview__image">
                                            <img src={ImagePdf['pdf']} alt="" />                
                                        </div>
                                        <p className="fileName">{file.path}</p>
                                        <br />
                                        <p className="fileSize">{(file.size/1000000).toFixed(2)} MB</p>
                                        <div className="dropfilespreview__item__del">    
                                            <button className="delButton" onClick={removeFile(file)}><BsTrash2Fill /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null
                }
            </div>
            <button className="sendButton" onClick={() => window.location.reload()}>Enviar</button> 
        </section>
    );
}

