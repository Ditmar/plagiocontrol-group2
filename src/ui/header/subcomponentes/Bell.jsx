import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Bell extends Component {
    constructor(props) {
        super(props)

            this.state = {
                isLoggendIn: true
            }
        
    }

    render(){
        if(this.state.isLoggendIn){
            return(
                <div className="icons">
                <div className="incon">
                <FontAwesomeIcon icon={faBell} className="bell"/> 
                <div className="counter"></div>  
                </div>
                 </div>
            )
        }else{
            return(
                <div className="icons">
                    <div className="incon">
                    <FontAwesomeIcon icon={faBell} className="bell"/> 
                    </div>
                 </div>
        
                );
        }

       
    }
}


export default Bell;
