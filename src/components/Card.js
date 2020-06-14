import React from 'react';
import RottenTomatoes from '../img/rottentomatoes.svg';
import Tmdb from '../img/logo.png';
import Imdb from '../img/imdb.png';
import Youtube from '../img/youtube.svg';

const Card = ({ movie, trailerUrl, imdbUrl }) => {

    const posterUrl = 'http://image.tmdb.org/t/p/w500//' + movie.poster_path;
    const tmdbUrl = 'https://www.themoviedb.org/movie/' + movie.id;
    const rottenTomatoesUrl = 'https://www.rottentomatoes.com/search?search=' + movie.title;

    return (
        <div className="card">
            <div className="card-img">
                {movie.poster_path ?
                    <a href={movie.homepage} target="blank">
                        <img src={posterUrl} alt={movie.title} title={movie.title}></img>
                    </a> : null}
            </div>
            <div className="card-info">
                <h1 className="movie-title">
                    {movie.title && movie.title}<br></br>
                </h1>
                <h3 className="tagline">
                    {movie.tagline && movie.tagline}<br></br>
                </h3>
                <p className="overview">
                    {movie.overview && movie.overview}<br></br><br></br>
                </p>
                <div className="genres-container">
                    <h3 className="genres">
                        {movie.genres !== undefined ? movie.genres.map(el => <li key={el.id} className="genre-item">{el.name}</li>) : null}
                    </h3><br></br>
                    <h4 className="production">
                        {movie.production_companies !== undefined ? movie.production_companies.map(el => <li key={el.id} className="production-item">{el.name}</li>) : null}
                    </h4>
                </div><br></br><br></br><br></br>
                <div className="info-grid">
                    <div className="info-item">
                        <h3 className="header">Release Date</h3>
                        {movie.release_date ? <span>{movie.release_date}</span> : 'unknown'}<br></br>
                    </div>
                    <div className="info-item">
                        <h3 className="header">Runtime</h3>
                        {movie.runtime ? <span>{movie.runtime} mins</span> : 'unknown'}<br></br>
                    </div>
                    <div className="info-item">
                        <h3 className="header">Revenue</h3>
                        {movie.revenue ? <span>${parseFloat(movie.revenue).toLocaleString('en')}</span> : 'unknown'}<br></br>
                    </div>
                    <div className="info-item">
                        <h3 className="header">Average Vote</h3>
                        <span>{movie.vote_average}</span>
                    </div>
                </div><br></br>
                <div className="links">
                    {tmdbUrl && <a href={tmdbUrl} target="blank"><img src={Tmdb}></img></a>}

                    {/* {imdbUrl && <a href={imdbUrl} target="blank"><i className="fab fa-2x fa-imdb"></i></a>} */}
                    {imdbUrl && <a href={imdbUrl} target="blank"><img src={Imdb}></img></a>}

                    {/* {posterUrl && <a href={posterUrl} target="blank"><i className="fas fa-2x fa-globe"></i></a>} */}
                    {rottenTomatoesUrl && <a href={rottenTomatoesUrl} target="blank"><img src={RottenTomatoes}></img></a>}

                    {/* {trailerUrl && <a href={trailerUrl} target="blank"><i className="fab fa-2x fa-youtube"></i></a>} */}
                    {trailerUrl && <a href={trailerUrl} target="blank"><img src={Youtube}></img></a>}
                </div><br></br>
            </div>
        </div>
    )
};

export default Card;