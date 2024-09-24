import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import MisionesDestacadas from '../components/MisionesDestacadas';

const eventos = [
    { status: '1957', title: 'Lanzamiento del Sputnik', description: 'El primer satélite artificial fue lanzado por la Unión Soviética, marcando el inicio de la era espacial.' },
    { status: '1961', title: 'Yuri Gagarin en el espacio', description: 'El cosmonauta soviético Yuri Gagarin se convierte en el primer ser humano en orbitar la Tierra.' },
    { status: '1969', title: 'Aterrizaje en la Luna', description: 'La misión Apolo 11 de la NASA llega a la Luna. Neil Armstrong fue el primer hombre en caminar sobre su superficie.' },
    { status: '1971', title: 'Salyut 1', description: 'La Unión Soviética lanza la primera estación espacial, la Salyut 1, un laboratorio en órbita.' },
    { status: '1998', title: 'Estación Espacial Internacional', description: 'Se lanzó la primera pieza de la ISS, una colaboración internacional para la investigación en órbita.' },
    { status: '2012', title: 'Curiosity en Marte', description: 'El rover Curiosity aterrizó en Marte para explorar el clima, geología y posibilidades de vida.' },
    { status: '2021', title: 'Misión Perseverance', description: 'El rover Perseverance aterrizó en Marte con la misión de buscar signos de vida pasada.' }
];

const Historia = () => {
    return (
        <div className="p-grid p-justify-center p-align-center" style={{ padding: '2rem' }}>
            <div className="p-col-12 p-md-10">
                <h2 className="p-text-center">Historia de la Exploración Espacial</h2>

                <Timeline value={eventos} align="alternate" className="custom-timeline" 
                    content={(item) => (
                        <Panel header={item.title} toggleable style={{ marginBottom: '1rem' }}>
                            <p>{item.description}</p>
                        </Panel>
                    )}
                />

                <Divider />

                <h3 className="p-text-center">Hitos Clave</h3>
                <div className="p-grid p-justify-center">
                    <div className="p-col-12 p-md-4">
                        <Card title="Primer Ser Humano en el Espacio" subTitle="Yuri Gagarin" className="p-shadow-5" style={{ marginBottom: '2rem' }}>
                            <p className="p-m-0">El cosmonauta Yuri Gagarin fue el primero en realizar una órbita completa alrededor de la Tierra el 12 de abril de 1961.</p>
                            <Button label="Más Información" icon="pi pi-info-circle" className="p-button-primary" style={{ marginTop: '1rem' }} />
                        </Card>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <Card title="Primer Aterrizaje en la Luna" subTitle="Neil Armstrong" className="p-shadow-5" style={{ marginBottom: '2rem' }}>
                            <p className="p-m-0">El 20 de julio de 1969, Neil Armstrong se convirtió en el primer hombre en caminar sobre la Luna.</p>
                            <Button label="Ver Detalles" icon="pi pi-external-link" className="p-button-secondary" style={{ marginTop: '1rem' }} />
                        </Card>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <Card title="Misión Perseverance" subTitle="Marte 2021" className="p-shadow-5" style={{ marginBottom: '2rem' }}>
                            <p className="p-m-0">El rover Perseverance aterrizó en Marte en 2021 y está investigando signos de vida pasada.</p>
                            <Button label="Ver Más" icon="pi pi-external-link" className="p-button-success" style={{ marginTop: '1rem' }} />
                        </Card>
                    </div>
                </div>

                <Divider />
                <MisionesDestacadas />
            </div>
        </div>
    );
};

export default Historia;
