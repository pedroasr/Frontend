import * as React from 'react';

import MovieList from './movieList';
import GenderList from './genderList';

import './styles.css';

function App(){
    return(
            <div className='App'>
                <h1 className={'Title'}>lavideotecadelvago</h1>
                    <div className={'Body'}>
                        <div><GenderList /></div>
                        <div><MovieList /></div>
                    </div>
            </div>
    );
}

export default App;