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
                    <img src={props.image} alt={props.name} width='160px' height='227px'/>
                </Link>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export function MovieList(){
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([{id:0, image:'', name:''}]);
    const [movieNext, setMovieNext] = useState('');
    const [moviePrev, setMoviePrev] = useState('');
    if (!!param.page){
        var path =  `https://api.lavideotecadelvago.teamcamp.ovh/movies?page=${param.page}`;
    }
    else {
        path = 'https://api.lavideotecadelvago.teamcamp.ovh/movies?page=1';
    }

    React.useEffect(() => {
        fetch(path)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results)
            setMovieNext(data.next)
            setMoviePrev(data.prev)
        })
    }, [param, path]);

    if (isLoading){
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>  
        );
    }

    const listMovies = movieData.map(data => 
        <div key={data.id} className={`div${data.id}`}>
            <Movie id={data.id} image={data.image} name={data.name}/>
        </div>
    );
     
        if (!!movieNext && !!moviePrev){
            return(
                <div>
                    <div className='div-list'>
                        {listMovies}
                    </div>
                    <div className='next-link'>
                        <Link to={`/${movieNext.slice(-1)}`}>Siguiente página</Link>
                    </div>
                    <div className='prev-link'>
                        <Link to={`/${moviePrev.slice(-1)}`}>Página anterior</Link>
                    </div>
                </div>
            );
        }
        if (!!movieNext){
            return(
                <div>
                    <div className='div-list'>
                        {listMovies}
                    </div>
                    <div className='next-link'>
                        <Link to={`/${movieNext.slice(-1)}`}>Siguiente página</Link>
                    </div>
                </div>
            );
        }
        if (!!moviePrev){
            return(
                <div>
                    <div className='div-list'>
                        {listMovies}
                    </div>
                    <div className='prev-link'>
                        <Link to={`/${moviePrev.slice(-1)}`}>Página anterior</Link>
                    </div>
                </div>
            );
        }
    
        return(
            <div className='div-list'>
                {listMovies}
            </div>
        );
}

export function MovieListFilter(){
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState([{id:0, image:'', name:''}]);

    React.useEffect(() => {
        fetch(`https://api.lavideotecadelvago.teamcamp.ovh/movies/filter?gender=${param.gender}`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results)
    }) 
},[param]);


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
                <h1 className={'Title'}><Link to='/'>lavideotecadelvago.com</Link></h1>
                    <div className={'Body'}>
                        <div><GenderList /></div>
                        <div className='div-list'>{listMoviesFilter}</div>
                    </div>
        </div>
    );
}


export default MovieList;
