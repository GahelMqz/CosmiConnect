import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../css/login.css'
import Login_G from "../Logins/Login_G";
import Login_T from "../Logins/Login_T";
import axios from 'axios';

function Login() {
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', { gmail, password });
            console.log(response.data);
            // Aquí puedes guardar el token de sesión si lo recibes del servidor, por ejemplo, en localStorage
            navigate('/'); // Redirecciona a la página principal o a donde corresponda después del inicio de sesión
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Manejar los errores de inicio de sesión aquí, como mostrar un mensaje al usuario
        }
    }

    return (
        <>
            <body className="body-login">
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Iniciar sesión</h1>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={gmail}
                                onChange={(e) => setGmail(e.target.value)}
                                required
                            />
                            <i className="bx bxs-user" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="bx bxs-lock-alt" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Recuérdame
                            </label>
                            <a href="#">Olvidé mi contraseña</a>
                        </div>
                        <button type="submit" className="btn-login">
                            ¡Comienza ahora!
                        </button>
                        <Login_G></Login_G>
                        <Login_T></Login_T>
                        <div className="register-link">
                            <p>
                                No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </body>
        </>
    );
}

export default Login;