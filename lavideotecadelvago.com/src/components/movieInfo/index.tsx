import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

export function MovieInfo() {
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] = useState({image:'', name:'', description:'', gender:'', release_year:0, rate:0});

    React.useEffect(() => {
        fetch(`http://localhost:3099/movies/movie?id=${param.id?.toString()}`)
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
        <div>
            <h1 id='main-title'>{movieData.name}</h1>
                <div>
                    <div>
                        <img itemProp='image' src={movieData.image} alt={movieData.name} width='160' height='227'/>
                    </div>
                    <div>
                        <div id="movie-rat" itemProp="ratingValue">{movieData.rate}</div>
                    </div>
                </div>
                    <dl className='movieInfo'>
                        <dt>Título original</dt>
                        <dd>{movieData.name}</dd>
                        <dt>Año</dt>
                        <dd>{movieData.release_year}</dd>
                        <dt>Género</dt>
                        <dd>{movieData.gender}</dd>
                        <dt>Sinopsis</dt>
                        <dd>{movieData.description}</dd>
                    </dl>
                <div>
                    
                </div>
        </div>
    );
}

export default MovieInfo;
