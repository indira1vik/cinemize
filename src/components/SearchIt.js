import React from 'react';
import Card from './Card';

export default function SearchIt({ searchitlist }) {
    if (searchitlist.length !== 0) {
        return (
            <div className='search-display'>
                <div className='heading'>Search Results</div>
                <div className='dis-cont'>
                {
                    searchitlist.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))
                }
                </div>
            </div>
        )
    }

}
