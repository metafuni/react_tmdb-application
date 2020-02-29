import React from 'react';

const Card = ({movie}) => {
    return (
        <div>
            <p>
                {movie.title}<br></br>
                {movie.tagline}<br></br>
                {movie.overview}<br></br><br></br>     
            </p>
        </div>
    )
};

export default Card;