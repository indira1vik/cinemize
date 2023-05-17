import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/Card.css'

export default function Card({ movie }) {

    function refreshPage() {
        window.location.reload(true);
    }

    const navigation = useNavigate();
    const handleClick = (movie) => {
        navigation('/detail', { state: { movie } });
        refreshPage()
    }
    const IMG_URL = `https://image.tmdb.org/t/p/original/`
    return (
        <div className='movie-card' onClick={() => handleClick(movie)}>
            <img src={`${IMG_URL}/${movie.poster_path}`} alt='Movie Poster' />
        </div>
    )
}
