import * as React from 'react';

import MovieList from './movieList';
import GenderList from './genderList';

import './styles.css';
import { Link } from 'react-router-dom';

function App(){
    return(
            <div className='App'>
                <h1 className={'Title'}><Link to='/'>lavideotecadelvago.com</Link></h1>
                
                    <div className={'Body'}>
                        <div><GenderList /></div>
                        <div><MovieList /></div>
                    </div>
            </div>
    );
}

export default App;