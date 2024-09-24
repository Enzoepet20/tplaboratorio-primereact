import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0a74da', color: '#fff' }}>
            <p>© 2024 Exploración Espacial. Todos los derechos reservados.</p>
            <a href="/terminos" style={{ color: '#fff', margin: '0 10px' }}>Términos y condiciones</a>
            <a href="/contacto" style={{ color: '#fff', margin: '0 10px' }}>Contacto</a>
        </footer>
    );
};

export default Footer;
