import '../css/footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className='footer'>
                    <p className='footer-p'>
                        Todos los derechos reservados © | SM-43 | Gahel Marquez | Emiliano Guerrero
                        Peralta
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;