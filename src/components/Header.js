import React from 'react';
import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

const Header = () => {
    const items = [
        { label: 'Inicio', icon: 'pi pi-fw pi-home', url: '/' },
        { label: 'Planetas y Estrellas', icon: 'pi pi-fw pi-globe', url: '/planetas' },
        { label: 'Historia de la Exploración', icon: 'pi pi-fw pi-calendar', url: '/historia' }
    ];

    return <Menubar model={items} />;
};

export default Header;
