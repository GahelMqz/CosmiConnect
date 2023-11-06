import '../css/header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <header>
            <ul class="nav-links">
                <Link to="/"><img className='logo-header' src={require("../imgs/logo.png")} alt="Logo" /></Link>
                <li class="center"><Link to="/nasa">Despierta tu curiosidad</Link></li>
                <li class="center"><Link to="/horoscopo">Horóscopo</Link></li>
                <li class="center"><Link to="/nosotros">Nosotros</Link></li>
                <li class="center"><Link to="/contactanos">Contáctanos</Link></li>
                <li class="center"><Link to="/dashboard">Dashboard</Link></li>
                <Link to="/login"><button type="submit" className="btn-login">
                    Ingresar
                </button>
                </Link>
                <Link to="/register"><button type="submit" className="btn-login">
                    Registrarme
                </button>
                </Link>
            </ul>
        </header>

    );
}

export default Header;