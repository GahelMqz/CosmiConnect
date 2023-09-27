import React from "react";
import '../css/login.css';

function login() {
    return (
        <>
            <div className="container">
                <h1>Iniciar sesión</h1>
                <input type="email" placeholder="Correo electrónico" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="¡Comienza ahora!" />
            </div>
        </>
    );
}

export default login;
