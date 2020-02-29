import React, { useState, useEffect } from 'react';
import Search from './Search';
import Card from './Card';
import Axios from 'axios';

const Main = () => {
    const [movie, setMovie] = useState({});

    const id = 157336;
    const API_key = '3ee3dd446b8afd003b08f596ade66996';
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_key}`;

    useEffect(() => {
        const fetchMovie = async () => {
            const result = await Axios(url);
            setMovie(result.data);
        };
        fetchMovie();
    }, []);

    console.log(movie);

    return (
        <div>
            <h1>TMDb - Movie Search</h1>
            <Search />
            <Card movie={movie}/>
        </div>
    )
};

export default Main;