import React, { useState, useEffect } from 'react';
import Search from './Search';
import Card from './Card';
import loadingLogo from '../img/logo.png';

import Axios from 'axios';

const Main = () => {
    const [movie, setMovie] = useState({});
    const [id, setId] = useState(157336);
    const [loading, setLoading] = useState(true);

    const API_key = '3ee3dd446b8afd003b08f596ade66996';
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_key}`;

    const fetchMovie = async () => {
        const result = await Axios(url);
        setMovie(result.data);
    };

    useEffect(() => {
        fetchMovie();
        setLoading(false);
    }, []);

    console.log(movie);
    const backdropUrl = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;
    console.log(backdropUrl);
    document.body.style.background = `url(${backdropUrl})`;

    return (
        <div className="container">
            {loading ? <span id="loading">
                            <div id="loading-ring">
                                <img src={loadingLogo} width="150px" alt="The Movie Database"></img>
                            </div>
                        </span> : null}
            <Search />
            <Card movie={movie} />
        </div>
    )
};

export default Main;