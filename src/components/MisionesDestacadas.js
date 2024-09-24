// src/components/MisionesDestacadas.js
import React from 'react';

const MisionesDestacadas = () => {
    const misiones = [
        { name: 'Apolo 11', year: 1969, description: 'Primera misión que llegó a la Luna.' },
        { name: 'Voyager 1', year: 1977, description: 'Primera nave en salir del sistema solar.' }
    ];

    return (
        <div>
            <h3>Misiones Destacadas</h3>
            <ul>
                {misiones.map((mision, index) => (
                    <li key={index}>
                        <strong>{mision.name}</strong> ({mision.year}): {mision.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MisionesDestacadas;
