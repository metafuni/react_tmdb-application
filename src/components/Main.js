import React, { useState, useEffect } from 'react';
import Search from './Search';
import Card from './Card';
import loadingLogo from '../img/logo.png';

import Axios from 'axios';

const Main = () => {
    const [movie, setMovie] = useState({});
    const [id, setId] = useState(27205);
    const [title, setTitle] = useState();
    const [trailerUrl, setTrailerUrl] = useState();
    const [loading, setLoading] = useState(true);

    const API_key = '3ee3dd446b8afd003b08f596ade66996';
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_key}`;

    const fetchMovie = async () => {
        const result = await Axios(url);
        setTitle(result.data.title);
        setMovie(result.data);
    };

    const updateMovie = async (e) => {
        setLoading(true);
        e.preventDefault();
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_key}&query=${e.target.elements.title.value}`;
        const result = await Axios(searchUrl);
        setId(result.data.results[0].id);
        fetchMovie();
        console.log(movie);
    };

    const updateBackground = () => {
        const backdropUrl = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        document.body.style.backgroundImage = `url(${backdropUrl})`;
        movie.backdrop_path ? document.body.style.backgroundImage = `url(${backdropUrl})` : document.body.style.backgroundImage = `url('https://therexberkhamsted.com/wp-content/uploads/2016/10/The-Rex-Cinema-Slider-01.png')`;
    };

    const fetchTrailer = async () => {
        const searchUrl = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}`;
        const result = await Axios(searchUrl);
        console.log(result.data.results[result.data.results.length-1].key);
        const key = result.data.results[result.data.results.length-1].key;
        setTrailerUrl(`https://www.youtube.com/watch?v=${key}`);
        console.log(trailerUrl);
    };

    fetchTrailer();

    useEffect(() => {
        fetchMovie();
        updateBackground();
        setLoading(false);
    }, [id]);

    return (
        <div className="container">
            {loading ? <span id="loading">
                            <div id="loading-ring">
                                <img src={loadingLogo} width="150px" alt="The Movie Database"></img>
                            </div>
                        </span> : null}
            <Search updateMovie={updateMovie} />
            <Card movie={movie} trailerUrl={trailerUrl} />
        </div>
    )
};

export default Main;