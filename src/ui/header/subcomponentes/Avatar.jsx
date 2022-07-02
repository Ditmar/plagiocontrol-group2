import React, { Fragment } from 'react'

const Avatar = ({urlImage}) => {

    return(
        <Fragment>
            <img src={urlImage} alt="" className=" avatar"/>
        </Fragment>
    );
}

export default Avatar;