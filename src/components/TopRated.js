import React from 'react';
import Card from './Card';

export default function TopRated({ movieslist }) {
    return (
        <div>
        <h2>Top Rated</h2>
        <div className='dis-cont'>
            {
                movieslist.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))
            }
            </div>
        </div>
    )
}
