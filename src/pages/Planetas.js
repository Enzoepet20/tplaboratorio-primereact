import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Divider } from 'primereact/divider';
import CuriosidadesPlanetas from '../components/CuriosidadesPlanetas';

const Planetas = () => {
    const planetas = [
        { name: 'Mercurio', description: 'El planeta más cercano al Sol, pequeño y rocoso.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg' },
        { name: 'Venus', description: 'Conocido por sus densas nubes de ácido sulfúrico y calor intenso.', image: 'https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-venus_de3a3995_1280x1280.jpg' },
        { name: 'Tierra', description: 'Nuestro hogar, el único planeta conocido con vida.', image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/940.jpg?w=1600&h=900' },
        { name: 'Marte', description: 'El planeta rojo, un desierto frío con señales de agua en su pasado.', image: 'https://www.ngenespanol.com/wp-content/uploads/2024/07/el-misterio-detras-de-los-planetas-por-que-marte-es-rojo-770x431.jpg' },
        { name: 'Júpiter', description: 'El gigante gaseoso, famoso por su gran tormenta conocida como la Gran Mancha Roja.', image: 'https://www.ngenespanol.com/wp-content/uploads/2023/06/jupiter-asi-es-el-planeta-mas-grande-y-antiguo-del-sistema-solar-770x431.jpg' },
        { name: 'Saturno', description: 'Famoso por sus impresionantes anillos compuestos de hielo y roca.', image: 'https://img.freepik.com/fotos-premium/fotografia-planeta-saturno_792751-11.jpg' }
    ];

    return (
        <div className="planetas p-grid p-justify-center" style={{ padding: '2rem' }}>
            <div className="p-col-12 p-md-10">
                <h2 className="p-text-center">Planetas del Sistema Solar</h2>
                <div className="p-grid">
                    {planetas.map((planeta, index) => (
                        <div key={index} className="p-col-12 p-md-4 p-lg-3">
                            <Card
                                title={planeta.name}
                                header={<img src={planeta.image} alt={planeta.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                                className="p-shadow-5"
                                footer={<Button label="Más Información" icon="pi pi-info" className="p-button-secondary" />}
                            >
                                <p>{planeta.description}</p>
                                <Tooltip target=".p-button-secondary" content={`Descubre más sobre ${planeta.name}`} />
                            </Card>
                        </div>
                    ))}
                </div>
                <Divider />
                <section className="curiosidades-section">
                    <h3 className="p-text-center">Curiosidades sobre los Planetas</h3>
                    <CuriosidadesPlanetas />
                </section>
            </div>
        </div>
    );
};

export default Planetas;
