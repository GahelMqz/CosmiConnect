import React from "react";
import { Link } from "react-router-dom";
import '../css/login.css'

function login() {
    return (
        <>
            <body className="body-login">
                <div className="wrapper">
                    <form action="">
                        <h1>Iniciar sesión</h1>
                        <div className="input-box">
                            <input type="email" placeholder="Correo electrónico" required="" />
                            <i className="bx bxs-user" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required="" />
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

export default login;
