import React from 'react';
import Logo from '../img/tmdb.svg';

const Search = ({ updateMovie }) => {
    return (
        <div className="search">
            <a href="https://www.themoviedb.org/?language=en-US" target="blank">
                <img src={Logo} alt="TMDB movie database website" title="The Movie Database" width="180px"></img>
            </a>
            <form className="search-form" onSubmit={updateMovie}>
                <input
                    type="text"
                    name="title"
                    placeholder="Search Movie Title ..."
                    id="title"
                />
            </form>
        </div>
    )
};

export default Search;