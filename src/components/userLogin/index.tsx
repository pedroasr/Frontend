import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import { UserContext } from '../user/UserContext';

export function Login(){
    const { loginUser } = React.useContext(UserContext);
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
            const login = await fetch('https://api.lavideotecadelvago.teamcamp.ovh/login', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({username: name, password: password})
            });
            const user = await login.json();
            loginUser({ id: user.id, username: user.username })
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
            <h3>Inicia Sesión</h3>
            {errorMessage()}
            <form>
            <label className="label">Username</label>
            <input onChange={handleName} className="input"
              value={name} type="text" />
     
            <label className="label">Constraseña</label>
            <input onChange={handlePassword} className="input"
              value={password} type="password" />
     
            <button onClick={handleSubmit} className="btn" type="submit">
              Inicia sesión
            </button>
          </form>
          </div>
        </div>
        </div>
      );
}

export default Login;