import React from 'react';
import Logo from '../img/logo.png';

const Search = () => {
    return (
        <div>
            <img src={Logo} alt="" width="50px"></img>
            <input 
                type="text"
                placeholder="Search Movie Title ..."
            />
        </div>
    )
};

export default Search;