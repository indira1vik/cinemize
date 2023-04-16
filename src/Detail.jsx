import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style/Detail.css'
import Youtube from 'react-youtube';
import Discover from './components/Discover';

export default function Detail() {

    const location = useLocation();
    const movieID = location.state.movie.id;

    // FETCH MOVIES DETAILS
    const [movielist, setMovielist] = useState([]);
    const fetchmoviedetails = async (id) => {
        const API_URL_DET = `https://api.themoviedb.org/3/movie/${id}?api_key=dc6c9756c455e1b3b3f8d3b91062b234&append_to_response=videos`
        const details_response = await fetch(API_URL_DET);
        const details_response_json = await details_response.json();
        setMovielist(details_response_json);
    }
    useEffect(() => {
        fetchmoviedetails(movieID)
    }, [])

    // FETCH RECOMMENDED MOVIES
    const [simMovies, setSimmovies] = useState([]);
    const fetchSimilar = async (id) => {
        const API_URL_SIM = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=en&page=1`
        const sim_res = await fetch(API_URL_SIM);
        const sim_res_json = await sim_res.json();
        if (sim_res_json.results !== null) {
            setSimmovies(sim_res_json.results);
        }
    }

    useEffect(() => {
        fetchSimilar(movieID)
    }, [])

    const gl = movielist.genres;
    const list = gl?.map((ele) => {
        return (
            <div className='genre-name'>{ele.name}</div>
        )
    })

    const prod = movielist.production_companies;
    const list1 = prod?.map((ele) => {
        return (
            <div className='prod_name' key={ele.id}>
                {ele.name}
            </div>
        )
    })

    let year = "";
    if (movielist.release_date !== undefined) {
        for (let i = 0; i < 4; i++) {
            year += movielist?.release_date[i]
        }
    }

    const langs = movielist.spoken_languages?.map((ele) => {
        return (
            <div key={ele.id} className='lang-div'>
                {ele.english_name}
            </div>
        )
    })

    const renderTrailer = () => {
        // console.log(movielist.videos);
        if (movielist.videos?.results.length > 0) {
            console.log(movielist.videos.results.length);
            const trailer = movielist.videos.results.find(vid => vid.name.includes('Official') || vid.name.includes('official') || vid.name.includes('Trailer') || vid.name.includes('trailer'));
            console.log(trailer);
            if (trailer != undefined) {
                return (
                    <div key={trailer.id}>
                        <Youtube
                            videoId={trailer.key}
                        />
                    </div>
                )
            } else {
                return 'No Trailer available'
            }

        } else {
            return 'No Trailers or Teasers Available';
        }
    }

    const navigation = useNavigate();
    const handleClick = () => {
        navigation('/home');
    }


    return (
        <div className='detail-cont'>
            <div className='intro' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movielist.backdrop_path})` }}>
                <div className='info-cont'>
                    <div className='detailed-info'>
                        <div>
                            <h1>{movielist.title}</h1>
                            <div style={{ paddingTop: '2vh' }}>{year}</div>
                        </div>
                        <div className='vote-cont'>
                            Average Votes
                            <div className='vote-avg' style={{ fontWeight: 'bold' }}>{movielist.vote_average}</div>
                        </div>
                    </div>
                    <div style={{padding:'6vh'}}>
                        <button className='btn-home' onClick={handleClick}>◀ Back to Home</button>
                    </div>
                </div>

            </div>
            <div className='down-details'>
                <div className='overview'>
                    <h3>Overview</h3>
                    <div>{movielist.overview}</div>
                </div>
                <div className='genre'>
                    <h3>Genre</h3>
                    <div className='genre-list'>{list}</div>
                </div>
            </div>
            <div className='other-details'>
                <div className='trailer-details'>
                    <h3>Trailer</h3>
                    <div>{renderTrailer()}</div>
                </div>
                <div className='lang-details'>
                    <h3>Languages</h3>
                    <div className='lang-list'>{langs}</div>
                </div>
            </div>
            <div className='movie-details-text'>
                <h3>Production Companies</h3>
                <div className='prod-list'>{list1}</div>
            </div>
            <div className='similar-cont'>
                <Discover movieslist={simMovies} heading={'Recommended'} />
            </div>
        </div>
    )
}
