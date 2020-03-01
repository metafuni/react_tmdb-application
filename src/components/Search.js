import React from 'react';
import Logo from '../img/tmdb.svg';

const Search = () => {
    return (
        <div className="search">
            <a href="https://www.themoviedb.org/?language=en-US" target="blank">
                <img src={Logo} alt="TMDB movie database website" title="The Movie Database" width="180px"></img>
            </a>
            <input 
                type="text"
                placeholder="Search Movie Title ..."
            />
        </div>
    )
};

export default Search;