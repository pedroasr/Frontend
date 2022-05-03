import * as React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './style.css';

export function MovieInfo() {
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState({image:'', name:'', description:'', gender:'', release_year:0, rate:0});

    React.useEffect(() => {
        fetch(`https://api.lavideotecadelvago.teamcamp.ovh/movies/movie?id=${param.id}`)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setMovieData(data.results[0])})
    }, [param]);

    if (isLoading){
        return (
            <div className="App">
                <h1>Cargando...</h1>
            </div>  
        );
    }
    return ( 
        <div className='App'>
        <h1 className={'Title'}><Link to='/'>lavideotecadelvago.com</Link></h1> 
        <div className={'Body'}> 
        <div className='main-div'>
            <h1 id='main-title'>{movieData.name}</h1>
                <div>
                    <div>
                        <img itemProp='image' src={movieData.image} alt={movieData.name} width='240' height='340'/>
                    </div>
                </div>
                    <dl className='movieInfo'>
                        <dt>Puntuación</dt>
                        <dd>{movieData.rate}</dd>
                        <dt>Título original</dt>
                        <dd>{movieData.name}</dd>
                        <dt>Año</dt>
                        <dd>{movieData.release_year}</dd>
                        <dt>Género</dt>
                        <dd>{movieData.gender}</dd>
                        <dt>Sinopsis</dt>
                        <dd>{movieData.description}</dd>
                    </dl>
                    </div>        
        </div>
        </div> 
    );
}

export default MovieInfo;
