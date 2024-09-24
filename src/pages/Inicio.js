import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Galleria } from 'primereact/galleria';
import Noticias from '../components/Noticias';

const Inicio = () => {
    const misiones = [
        { title: 'Misión a Marte', image: 'https://images.ecestaticos.com/mK_hmlAxApj_ML53UPTSlJ4Uq6c=/0x0:2270x1279/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc9e%2F519%2Fbe2%2Fc9e519be2fe110de782d0a5ff0bd43cf.jpg', description: 'La misión a Marte busca investigar la geología del planeta y la posibilidad de vida pasada.' },
        { title: 'Exploración de la Luna', image: 'https://c.files.bbci.co.uk/F800/production/_118088436_for_press_release.jpg', description: 'El objetivo de esta misión es establecer una presencia humana sostenida en la superficie lunar.' },
        { title: 'Viaje a Júpiter', image: 'https://s3.abcstatics.com/media/summum/2021/08/04/falcon-heavy-1-k5QH--1248x698@abc.jpg', description: 'La sonda investigará el campo magnético y las lunas de Júpiter.' }
    ];

    const galleriaImages = [
        { itemImageSrc: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/27/15906029443967.jpg', alt: 'Exploración 1', title: 'Lanzamiento' },
        { itemImageSrc: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2021/08/03/nasa.jpeg', alt: 'Exploración 2', title: 'Módulo Lunar' },
        { itemImageSrc: 'https://www.telemundo.com/sites/nbcutelemundo/files/images/article/cover/2016/09/08/nave-espacial-despegando.jpg', alt: 'Exploración 3', title: 'Nave Espacial' }
    ];

    const itemTemplate = (item) => (
        <Card title={item.title} className="p-shadow-5" style={{ marginBottom: '2rem' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <p style={{ marginTop: '1rem' }}>{item.description}</p>
            <Button label="Leer Más" icon="pi pi-info-circle" className="p-button-primary" style={{ marginTop: '1rem' }} />
        </Card>
    );

    return (
        <div className="inicio p-grid p-justify-center" style={{ padding: '2rem' }}>
            <div className="p-col-12 p-md-10">
                <h2 className="p-text-center">Exploración Espacial Actual</h2>
                <Carousel value={misiones} itemTemplate={itemTemplate} numVisible={1} numScroll={1} className="custom-carousel" />

                <Divider />

                <h3 className="p-text-center">Galería de Imágenes</h3>
                <Galleria
                    value={galleriaImages}
                    showThumbnails={true} // Cambia a true si deseas mostrar miniaturas
                    autoPlay
                    transitionInterval={3000}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                    item={(item) => (
                        <img
                            src={item.itemImageSrc}
                            alt={item.alt}
                            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                        />
                    )}
                />

                <Divider />

                <section className="noticias-section">
                    <h3 className="p-text-center">Últimas Misiones</h3>
                    <Noticias />
                </section>
            </div>
        </div>
    );
};

export default Inicio;
