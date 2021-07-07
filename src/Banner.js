import "./Banner.css"
import axios from "./axios"
import React, {useState, useEffect} from 'react'
import requests from "./requests"

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
        // sets data for requests
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
        ])
        return request
        }
        fetchData()
    }, [])

    return (
        <header className="banner" style={{backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center"}}>  {/** Background image */}
        <div className="banner__contents">
            {/* title */}
            <h1>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/* div > 2 buttons */}
            <div className="banner__buttons">
                <button className="banner__button">
                    Play
                </button>
                <button className="banner__button">
                    My List
                </button>
            </div>
            {/* description */}
            <h1 className="banner__description">{movie?.overview}</h1>
        </div>
        </header>
    )
}

export default Banner
