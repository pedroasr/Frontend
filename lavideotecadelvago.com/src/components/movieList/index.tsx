import * as React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieInfo from '../movieInfo';

import './style.css';

type MovieProps = {
    id: number
    image: string;
    name: string;
};

export function Movie(props: MovieProps) {
    const path = `/movie?id=${props.id}`;
    return (
        <div>
            {/* <Route path={path} element={<MovieInfo path={path}/>}> */}
                <div>
                    <img src={props.image} alt={props.name} />
                </div>
                <div>
                    {props.name}
                </div>
            {/* </Route> */}
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

    const info = movieData.map(data => 
        <div key={data.id}>
            <Movie id={data.id} image={data.image} name={data.name}/>
        </div>
    );

    return(

            <div> 
               {/*  <Routes> */}
                 <div>
                    {info}
                 </div>
                {/* </Routes> */}
            </div>
        
    )
}

export default MovieList;
