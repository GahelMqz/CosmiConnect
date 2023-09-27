// importar react

import React from 'react';

// agregar los enlaces 

import { Link } from 'react-router-dom';

// crear la funcion 

function Encabezado() {
    // metodo que regresa el HTML
    return (
        <>
            <header>
                <h1>CosmicConnect.com</h1>
            </header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/categorias">Categorias</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </>
    );
}

// exportamos 

export default Encabezado;