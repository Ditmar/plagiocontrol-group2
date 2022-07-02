import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Users = ({user}) => {

    return(
        <Fragment>
            <div className="half">
                <div className="son2">
                    <h5 className="user"> {user.name} </h5>
                </div>
                <div className='son2'>
                <Avatar urlImage={user.urlImage} />
                </div>
                
            </div>
        </Fragment>
    );
}

export default Users; 