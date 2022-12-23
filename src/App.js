import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


const API_URL='http://www.omdbapi.com?apikey=77e7188f'

const movie1={
    "Title":"3 idiots",
    "Year":"2012",
    "imbdId":"tt2586634",
    "Type":"movie",
    "Poster":"N/A"
}

const App=()=>{

    const [movies,setMovies]=useState([]);

    const  searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s={title}`);
        const data=await response.json();
        console.log(data.Search);
    }
    useEffect(()=>{
        setMovies('Spiderman');
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>
        
        <div className='search'>
            <input
            placeholder="Search for movies"
            value="Superman"
            onChange={()=>{}}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>{}}
            />
        </div>

        {
            movies?.length>0
        ? ( <div className='container'>
            <MovieCard movie1={movie1}/>
            </div>

        ):
        (
            <div classname="empty">
                <h2>No movies found</h2>
            </div>
        )
        }
       
        </div>
    )
}

export default App;