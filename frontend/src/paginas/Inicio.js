import '../css/inicio.css'
import React from "react";
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';

function Inicio() {
    return (
        <>
            <section className="blue">
                <h1>¡Descubre el Universo en CosmiConnect!</h1>
                <p>
                Descubre el espacio como nunca antes. Horóscopos, planetas, estrellas y satélites, todo en un solo lugar. Únete a nosotros y despierta tu pasión por el universo.
                </p>
                <div className="curve" />
            </section>
        </>
    );
}

export default Inicio;
