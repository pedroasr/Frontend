import * as React from 'react';
import Header from './header';
import MovieList from './movieList';
import GenderList from './genderList';
import './styles.css';

function App(){
    return(
            <div className='App'>
                <Header />
                <div className={'Body'}>
                    <div><GenderList /></div>
                    <div><MovieList /></div>
                </div>
            </div>
    );
}

export default App;