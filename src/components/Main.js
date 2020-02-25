import React, { useState } from 'react';
import Search from './Search';
import Card from './Card';

const Main = () => {
    const [movie, setMovie] = useState({
        id: 157336
    });

    const API_key = '';
    const url = '';

    const fetchMovie = (movie) => {
        console.log(movie.id);
    };
    fetchMovie(movie);

    return (
        <div>
            <Search />
            <Card />
        </div>
    )
};

export default Main;