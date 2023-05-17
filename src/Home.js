import React, { useEffect, useState } from 'react';
import Discover from './components/Discover';
import SearchIt from './components/SearchIt';
import './style/Home.css';

export default function Home() {

    // FETCH POPULAR MOVIES
    const [movielist, setMovielist] = useState([]);
    const fetchmovie = async () => {
        const API_URL_POP = `https://api.themoviedb.org/3/movie/popular?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=en-US&adult=false&region=US`
        const popular_response = await fetch(API_URL_POP);
        const popular_response_json = await popular_response.json();
        if (popular_response_json.results) {
            setMovielist(popular_response_json.results);
        }
    }
    useEffect(() => {
        fetchmovie()
    }, [])

    // FETCH TOP RATED MOVIES
    const [toplist, setToplist] = useState([]);
    const fetchtop = async () => {
        const API_URL_TOP = `https://api.themoviedb.org/3/movie/top_rated?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=en&region=US`
        const top_response = await fetch(API_URL_TOP);
        const top_response_json = await top_response.json();
        if (top_response_json.results) {
            setToplist(top_response_json.results);
        }
    }
    useEffect(() => {
        fetchtop()
    }, [])

    // FETCH SEARCH RESULTS
    const [searchmovie, setSearchmovie] = useState('');
    const handleSearchmovie = (e) => {
        setSearchmovie(e.target.value);
    }
    const fetchResults = async (searchmovie) => {
        const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=en-US&query=${searchmovie}&adult=false`
        const response = await fetch(API_URL_SEARCH);
        const responseJson = await response.json();
        if (responseJson.results) {
            setSearchResults(responseJson.results);
        }
    }
    useEffect(() => {
        fetchResults(searchmovie);
    }, [searchmovie])
    const [searchresults, setSearchResults] = useState([]);

    // FETCH UPCOMING MOVIES
    const [upcoming, setUpcoming] = useState([]);
    const fetchUpcoming = async () => {
        const API_URL_UPC = `https://api.themoviedb.org/3/movie/upcoming?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=en-US&page=1`;
        const res_upc = await fetch(API_URL_UPC);
        const res_upc_json = await res_upc.json();
        if (res_upc_json.results) {
            setUpcoming(res_upc_json.results);
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, []);

    // FETCH BOLLYWOOD
    const [bolly, setBolly] = useState([]);
    const fetchBolly = async () => {
        const API_URL_BOL = `https://api.themoviedb.org/3/discover/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=hi-IN&region=IN&with_original_language=hi&sort_by=popularity.desc`;
        const res_bol = await fetch(API_URL_BOL);
        const res_bol_json = await res_bol.json();
        if (res_bol_json.results) {
            setBolly(res_bol_json.results);
        }
    }
    useEffect(() => {
        fetchBolly()
    }, []);

    // FETCH KOLLYWOOD
    const [kolly, setKolly] = useState([]);
    const fetchKolly = async () => {
        const API_URL_KOL = `https://api.themoviedb.org/3/discover/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=ta-IN&region=IN&with_original_language=ta&sort_by=popularity.desc`;
        const res_kol = await fetch(API_URL_KOL);
        const res_kol_json = await res_kol.json();
        if (res_kol_json.results) {
            setKolly(res_kol_json.results);
        }
    }
    useEffect(() => {
        fetchKolly()
    }, []);

    // FETCH SANDALWOOD
    const [sandel, setSandal] = useState([]);
    const fetchSandal = async () => {
        const API_URL_SAN = `https://api.themoviedb.org/3/discover/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=kn-IN&region=IN&with_original_language=kn&sort_by=popularity.desc`;
        const res_san = await fetch(API_URL_SAN);
        const res_san_json = await res_san.json();
        if (res_san_json.results) {
            setSandal(res_san_json.results);
        }
    }
    useEffect(() => {
        fetchSandal()
    }, []);

    // FETCH MOLLYWOOD
    const [molly, setMolly] = useState([]);
    const fetchMolly = async () => {
        const API_URL_KOL = `https://api.themoviedb.org/3/discover/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=ml-IN&region=IN&with_original_language=ml&sort_by=popularity.desc`;
        const res_mol = await fetch(API_URL_KOL);
        const res_mol_json = await res_mol.json();
        if (res_mol_json.results) {
            setMolly(res_mol_json.results);
        }
    }
    useEffect(() => {
        fetchMolly()
    }, []);

    // FETCH TOLLYWOOD
    const [tolly, setTolly] = useState([]);
    const fetchTolly = async () => {
        const API_URL_TOL = `https://api.themoviedb.org/3/discover/movie?api_key=dc6c9756c455e1b3b3f8d3b91062b234&language=te-IN&region=IN&with_original_language=te&sort_by=popularity.desc`;
        const res_tol = await fetch(API_URL_TOL);
        const res_tol_json = await res_tol.json();
        if (res_tol_json.results) {
            setTolly(res_tol_json.results);
        }
    }
    useEffect(() => {
        fetchTolly()
    }, []);

    return (
        <div className='home-cont'>
            <div>
                <div className='nav-cont'>
                    <h1>Cinemize</h1>
                    <input
                        type='text'
                        value={searchmovie}
                        onChange={handleSearchmovie}
                        placeholder='Search movies...'
                    />
                </div>
            </div>
            <div>
                <SearchIt searchitlist={searchresults} />
            </div>
            <div>
                <Discover movieslist={movielist} heading={'Popular'} />
            </div>
            <div>
                <Discover movieslist={toplist} heading={'Top Rated'} />
            </div>
            <div>
                <Discover movieslist={upcoming} heading={'Upcoming'} />
            </div>
            <div>
                <Discover movieslist={bolly} heading={'Bollywood'} />
            </div>
            <div>
                <Discover movieslist={kolly} heading={'Kollywood'} />
            </div>
            <div>
                <Discover movieslist={sandel} heading={'Sandalwood'} />
            </div>
            <div>
                <Discover movieslist={molly} heading={'Mollywood'} />
            </div>
            <div>
                <Discover movieslist={tolly} heading={'Tollywood'} />
            </div>
            <div className='footer'>
                <h2 style={{ margin: '0' }}>Cinemize</h2>
                <ul>
                    <a href="https://www.imdb.com/privacy"><li>Privacy Policy</li></a>
                    <a href="https://www.imdb.com/conditions"><li>Terms & Conditions</li></a>
                    <a href="https://help.imdb.com/imdb"><li>Help</li></a>
                </ul>
                <div>
                    Copyrights © Cinemize Ltd.
                </div>
            </div>
        </div>
    )
}
