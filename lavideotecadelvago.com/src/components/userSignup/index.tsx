import * as React from 'react';
import { useState } from 'react';
import Header from '../header';
import { useNavigate } from "react-router-dom"

export function Signup(){
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
    };

    const handlePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (name === '' || password === '') {
          setError(true);
        } else {
          setError(false);
          (async () => {
            const rawResponse = await fetch('https://api.lavideotecadelvago.teamcamp.ovh/signup', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({username: name, password: password})
            });
            await rawResponse.json();
            nav('/');

          })();
        }
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                display: error ? '' : 'none',
                }}>
                <h3>Debes rellenar todos los campos</h3>
            </div>
        );
    };

    return (
        <div>
        <Header />
        <div className="Body">
          <div>
            <h3>Registrate</h3>
            {errorMessage()}
            <form>
            <label className="label">Username</label>
            <input onChange={handleName} className="input"
              value={name} type="text" />
     
            <label className="label">Constraseña</label>
            <input onChange={handlePassword} className="input"
              value={password} type="password" />
     
            <button onClick={handleSubmit} className="btn" type="submit">
              Continuar
            </button>
          </form>
          </div>
        </div>
        </div>
      );

}

export default Signup;