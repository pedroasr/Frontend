import React from 'react';
import './index.css';
import App from './components/app';
//import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieInfo from './components/movieInfo';
import AppFilter from './components/movieListFilter';
import Signup from './components/userSignup';
import Login from './components/userLogin';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/:page' element={<App />}/>
            <Route path='/movie/:id' element={<MovieInfo />}/>
            <Route path='/filter/:gender' element={<AppFilter />}/>
            <Route path='/filter/:gender/:page' element={<AppFilter />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

