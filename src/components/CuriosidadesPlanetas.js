import React from 'react';

const CuriosidadesPlanetas = () => {
    const curiosidades = [
        { title: 'Marte', fact: 'Tiene el volcán más grande del sistema solar, llamado Olympus Mons.' },
        { title: 'Júpiter', fact: 'Es tan grande que podrías meter 1.300 Tierras en él.' }
    ];

    return (
        <div>
            <h3>Curiosidades de Planetas</h3>
            <ul>
                {curiosidades.map((curiosidad, index) => (
                    <li key={index}>
                        <strong>{curiosidad.title}: </strong> {curiosidad.fact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CuriosidadesPlanetas;
