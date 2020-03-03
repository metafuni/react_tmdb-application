import React from 'react';
import Img from '../img/logo.png';

const Card = ({ movie }) => {

    const posterUrl = 'http://image.tmdb.org/t/p/w500//' + movie.poster_path;
    // const backdropUrl = 'https://image.tmdb.org/t/p/original/' + movie.backdrop_path;

    return (
        <div className="card">
            <div className="card-img">
                
                    {movie.poster_path ? 
                        <a href={movie.homepage} target="blank">
                            <img src={posterUrl} alt={movie.title} title={movie.title}></img>
                        </a> : 
                        // <img src={Img} id="alt-img" alt="TMDb The Movie Database logo" title="TMDb The Movie Database"></img>
                        null}
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
                </div><br></br><br></br>
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
                </div>
            </div>
        </div>
    )
};

export default Card;