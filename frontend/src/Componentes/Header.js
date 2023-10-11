import '../css/header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        
            <header>
                <ul class="nav-links">
                    <li class="center"><Link to="/">Logo</Link></li>
                    <li class="center"><Link to="">Despierta tu curiosidad</Link></li>
                    <li class="center"><Link to="">Horóscopo</Link></li>
                    <li class="center"><Link to="">Nosotros</Link></li>
                    <li class="center"><Link to="">Contáctanos</Link></li>
                    <button type="submit" className="btn-login">
                        Ingresar
                    </button>
                    <button type="submit" className="btn-login">
                        Registrarse
                    </button>
                </ul>
            </header>
        
    );
}

export default Header;