import React, {useState, useEffect} from 'react'
import axios from './axios'

function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([])

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
            // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
             
            <div className="row__posters">
                {/* <several row__poster(s)/> */}
                {movies.map()}
            </div>
             {/* container -> posters */}
        </div>
    )
}

export default Row
