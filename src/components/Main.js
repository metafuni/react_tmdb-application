import React, { useState, useEffect } from 'react';
import Search from './Search';
import Card from './Card';
import loadingLogo from '../img/logo.png';
import defaultBg from '../img/default-bg.jpg';
import Axios from 'axios';

const Main = () => {
    const [movie, setMovie] = useState({});
    const [id, setId] = useState(475557);
    const [trailerUrl, setTrailerUrl] = useState();
    const [imdbUrl, setImdbUrl] = useState();
    const [videoURL, setVideoURL] = useState();
    const [loading, setLoading] = useState(true);

    const API_key = '3ee3dd446b8afd003b08f596ade66996';
    const YT_API_KEY = 'AIzaSyCHb2jEzMwhQFYj2V2s-boCkl2KLuIdVJk';
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_key}`;

    const fetchMovie = async () => {
        const result = await Axios(url);
        setMovie(result.data);

        if (result.data.imdb_id) {
            setImdbUrl(`https://www.imdb.com/title/${result.data.imdb_id}`);
        } else {
            setImdbUrl(undefined);
        };
    };

    const updateMovie = async (id) => {
        setLoading(true);
        const searchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}`;
        const result = await Axios(searchUrl);
        setId(result.data.id);
    }

    const updateBackground = () => {
        const backdropUrl = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;
        movie.backdrop_path ? document.body.style.backgroundImage = `url(${backdropUrl})` : document.body.style.backgroundImage = `url(${defaultBg})`;
    };

    const fetchYoutube = async () => {
        setLoading(true);
        const ytURL = `https://www.googleapis.com/youtube/v3/search?topicId=%2Fm%2F02vxn&key=${YT_API_KEY}&part=snippet,id&order=relevance&maxResults=10&q=${movie.title}+official+movie+trailer`;

        const result = await Axios(ytURL);
        console.log(result);

        if (result.data.items[0]) {
            setVideoURL(`https://www.youtube.com/embed/${result.data.items[0].id.videoId}?enablejsapi=1`);
        } else {
            setVideoURL(null);
        };

        const modal = document.getElementById('trailer-container');
        modal.style.display = 'flex';
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                stopVideo(document.querySelector('.youtube-trailer'));
            }
        }
        setLoading(false);
    };

    //stopVideo() function gets called whenever user closes youtube-trailer modal
    var stopVideo = function (element) {
        var iframe = element.querySelector('iframe');
        var video = element.querySelector('video');
        if (iframe !== null) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if (video !== null) {
            video.pause();
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    useEffect(() => {
        updateBackground();
        setLoading(false);
    });

    return (
        <>
            {movie.title &&
                <div id="trailer-container">
                    <div className="youtube-trailer">
                        <button className="x-button-youtube" onClick={() => {
                            const modal = document.getElementById('trailer-container');
                            modal.style.display = "none";
                            stopVideo(document.querySelector('.youtube-trailer'));
                        }}>
                            <i className="fa fa-times"></i>
                        </button>
                        <iframe width="100%" height="100%" id="video" title={movie.title} src={videoURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
            <div className="container">
                {loading ? <span id="loading">
                    <div id="loading-ring">
                        <img src={loadingLogo} width="150px" alt="The Movie Database"></img>
                    </div>
                </span> : null}
                <Search updateMovie={updateMovie} />
                <Card movie={movie} trailerUrl={trailerUrl} imdbUrl={imdbUrl} fetchYoutube={fetchYoutube} />
            </div>
        </>
    )
};

export default Main;