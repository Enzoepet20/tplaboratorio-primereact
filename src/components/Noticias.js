import React from 'react';

const Noticias = () => {
    const noticias = [
        { title: 'Misión a Marte', summary: 'Detalles sobre la misión', date: 'Septiembre 2024' },
        { title: 'Exploración de la Luna', summary: 'Nuevas pruebas en la superficie lunar', date: 'Agosto 2024' },
        { title: 'Lanzamiento de SpaceX', summary: 'Nuevo cohete Falcon Heavy', date: 'Julio 2024' },
    ];

    return (
        <div>
            <h3>Últimas Noticias</h3>
            <ul>
                {noticias.map((noticia, index) => (
                    <li key={index}>
                        <h4>{noticia.title}</h4>
                        <p>{noticia.summary}</p>
                        <small>{noticia.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Noticias;
