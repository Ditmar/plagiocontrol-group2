import React, { useState } from 'react';
const BurgerButton = (props) => {
    return (
        <div className = "burger">
            <div onClick = { ()=>{props.handlerCLick();}} className = "blocksButton">
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}
export default BurgerButton;