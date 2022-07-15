import React, { useState } from 'react';
const BurgerButton = (props) => {
    return (
            <div onClick = { ()=>{props.handlerCLick();}} className = "blocksButton">
                <div/>
                <div/>
                <div/>
            </div>
    )
}
export default BurgerButton;