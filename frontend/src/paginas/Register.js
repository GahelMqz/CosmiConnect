import '../css/register.css'
import React from "react";
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <body className="body-register">
                <div className="wrapper">
                    <form action="">
                        <h1>Registrarse</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre completo" required="" />
                            <i className="bx bxs-user" />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Correo electrónico" required="" />
                            <i className="bx bxs-user" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required="" />
                            <i className="bx bxs-lock-alt" />
                        </div>
                        <div className="remember-forgot-register">
                            <label>
                                <input type="checkbox" />
                                Recuérdame
                            </label>
                            <a href="#">Olvidé mi contraseña</a>
                        </div>
                        <button type="submit" className="btn-register">
                            ¡Comienza ahora!
                        </button>
                        <div className="register-link-register">
                            <p>
                            Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </body>
        </>
    );
}

export default Register;
