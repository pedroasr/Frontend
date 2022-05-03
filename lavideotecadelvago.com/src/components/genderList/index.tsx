import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

type GenderProps = {
    gender: string;
};
export function Gender({ gender }: GenderProps) {
    const path = `/filter/${gender}`;
    return (
        <Link className={'Gender'} to={path}>
            {gender}
        </Link>
    );
}

export function GenderList(){
    return (
        <div className='gender-list'>
            <div className='gender-list-header'>Géneros</div>
                 <div>
                            <Gender gender='Drama'/>
                            </div>
                        <div>
                            <Gender gender='Comedia'/>
                            </div>
                        <div>
                            <Gender gender='Thriller'/>
                            </div>
        </div>
    );
}

export default GenderList;