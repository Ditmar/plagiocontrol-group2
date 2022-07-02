import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

    return(
        <div className="search">
            <div className="containerInput">
                <input 
                    className="form-control inputSearch"
                    
                    placeholder="search by author or book"
                />
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}

export default Search;