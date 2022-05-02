import * as React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GenderList from '../genderList';

import './style.css';

type MovieProps = {
    id: number
    image: string;
    name: string;
};

export function Movie(props: MovieProps) {
    return (
        <div>
            <div>
                <Link to={`/movie/${props.id}`}>
                    <img src={props.image} alt={props.name} width='160' height='227'/>
                </Link>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export function MovieList(){
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([{id:0, image:'', name:''}]);

    React.useEffect(() => {
        fetch(`http://localhost:3099/movies`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results)})
    }, []);

    if (isLoading){
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>  
        );
    }

    const listMovies = movieData.map(data => 
        <div key={data.id}>
            <Movie id={data.id} image={data.image} name={data.name}/>
        </div>
    );
    
    return(
        <div>
            {listMovies}
        </div>
    );
}

export function MovieListFilter(){
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([{id:0, image:'', name:''}]);

    React.useEffect(() => {
        fetch(`http://localhost:3099/movies/filter?gender=${param.gender}`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results)})
    }, [param]);

    if (isLoading){
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>  
        );
    }

    const listMoviesFilter = movieData.map(data => 
        <div key={data.id}>
            <Movie id={data.id} image={data.image} name={data.name}/>
        </div>
    );
    
    return(
<div className='App'>
                <h1 className={'Title'}>lavideotecadelvago</h1>
                    <div className={'Body'}>
                        <div><GenderList /></div>
                        <div>{listMoviesFilter}</div>
                    </div>
            </div>
    );
}

export default MovieList;
