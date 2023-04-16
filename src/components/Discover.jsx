import React from 'react';
import Card from './Card';

export default function Discover({ movieslist, heading }) {
    if (movieslist.length !== 0) {
        return (
            <div className='discover-display'>
                <div className='heading'>{heading}</div>
                <div className='dis-cont'>
                    {
                        movieslist.map((movie) => (
                            <Card movie={movie} key={movie.id} />
                        ))
                    }
                </div>

            </div>
        )
    }
}
