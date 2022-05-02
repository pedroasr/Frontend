import React from 'react';
import './index.css';
import App from './components/app';
//import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfo from './components/movieInfo';
import { MovieListFilter } from './components/movieList';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/movie/:id' element={<MovieInfo />}/>
            <Route path='/filter/:gender' element={<MovieListFilter />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

