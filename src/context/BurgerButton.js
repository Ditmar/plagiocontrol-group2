import React, { useState } from "react";
const BurgerButton = (props) =>{
   return (<div onClick={()=>{
    props.handlerClick();
   }} className="lo">
       <div />
       <div />
       <div />
   </div>)
}
export default BurgerButton;