import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './style/Splash.css'

export default function Splash() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 3600)
    }, [])
    return (
        <div className="spl-cont">
            <div className="header-spl">
                <div className="title">Cinemize</div>
                <div className="tagline">The popcorn time</div>
            </div>
            <div className="footer-spl">
                <ul>
                    <a href="https://www.imdb.com/privacy"><li>Privacy Policy</li></a>
                    <a href="https://www.imdb.com/conditions"><li>Terms & Conditions</li></a>
                    <a href="https://help.imdb.com/imdb"><li>Help</li></a>
                </ul>
            </div>
        </div>
    );
}