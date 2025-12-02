import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function DetalleProducto() {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    console.log("valor id:", id);

    useEffect(() => {
        Axios.get('http://localhost:3002/api/productos/' + id)
            .then((response) => {
                console.log("Producto recibido:", response.data);
                setProducto(response.data); // guardamos el producto completo
            })
            .catch((error) => console.log(error));
    }, [id]);

    if (!producto) {
        return <h3 className="text-center mt-5">Cargando producto...</h3>;
    }

    return (
        <div className="content-wrapper">

            {/* Encabezado */}
            <section className="content-header">
                <div className="container-fluid">
                   
                </div>
            </section>

            {/* Contenido */}
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body">

                        {/* PRODUCTO */}
                        <div className="row">

                            {/* Columna izquierda */}
                            <div className="col-12 col-sm-6">
                                <h1 className="d-inline-block d-sm-none">
                                    {producto.nombre}
                                </h1>

                                {/* Imagen principal */}
                                <div className="col-12">
                                    <img
                                        src={producto.imagen}
                                        className="product-image"
                                        alt={producto.nombre}
                                    />
                                </div>

                                {/* Miniaturas */}
                                <div className="col-12 product-image-thumbs">
                                    <div className="product-image-thumb active">
                                        <img src={producto.imagen} alt={producto.nombre} />
                                    </div>
                                </div>
                            </div>

                            {/* Columna derecha */}
                            <div className="col-12 col-sm-6">
                                <h3 className="my-3">{producto.nombre}</h3>
                                <p>{producto.descripcion_corta}</p>

                                <hr />

                                {/* Capacidades */}
                                {producto.capacidades?.length > 0 && (
                                    <>
                                        <h4 className="mt-3">
                                            Capacidad <small>Selecciona una</small>
                                        </h4>

                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            {producto.capacidades.map((cap, index) => (
                                                <label className="btn btn-default text-center" key={index}>
                                                    <input
                                                        type="radio"
                                                        name={`capacidad_${producto.id}`}
                                                        autoComplete="off"
                                                    />
                                                    <span className="text-xl">{cap}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Precio */}
                                <div className="bg-gray py-2 px-3 mt-4">
                                    <h2 className="mb-0">${producto.precio.toLocaleString('es-CL')}</h2>
                                </div>

                                {/* Botones */}
                                <div className="mt-4">
                                    <div className="btn btn-primary btn-lg btn-flat">
                                        <i className="fas fa-cart-plus fa-lg mr-2" />
                                        Agregar Carrito
                                    </div>

                                    <div className="btn btn-default btn-lg btn-flat">
                                        <i className="fas fa-heart fa-lg mr-2" />
                                        Agregar Favoritos
                                    </div>
                                </div>

                                {/* Redes */}
                                <div className="mt-4 product-share">
                                    <a href="#" className="text-gray"><i className="fab fa-facebook-square fa-2x" /></a>
                                    <a href="#" className="text-gray"><i className="fab fa-twitter-square fa-2x" /></a>
                                    <a href="#" className="text-gray"><i className="fas fa-envelope-square fa-2x" /></a>
                                    <a href="#" className="text-gray"><i className="fas fa-rss-square fa-2x" /></a>
                                </div>
                            </div>

                            {/* DESCRIPCIÓN Y COMENTARIOS */}
                            <div className="row mt-4 w-100">
                                <nav className="w-100">
                                    <div className="nav nav-tabs" id="product-tab" role="tablist">
                                        <a className="nav-item nav-link active"
                                            id="product-desc-tab"
                                            data-toggle="tab"
                                            href="#descripcion"
                                            role="tab">
                                            Descripción
                                        </a>

                                        <a className="nav-item nav-link"
                                            id="product-comments-tab"
                                            data-toggle="tab"
                                            href="#comentarios"
                                            role="tab">
                                            Comentarios
                                        </a>
                                    </div>
                                </nav>

                                <div className="tab-content p-3 w-100">
                                    
                                    {/* Descripción */}
                                    <div className="tab-pane fade show active" id="descripcion" role="tabpanel">
                                        {producto.descripcion_larga || "Sin descripción detallada."}
                                    </div>

                                    {/* Comentarios */}
                                    <div className="tab-pane fade" id="comentarios" role="tabpanel">
                                        {producto.comentarios && producto.comentarios.length > 0 ? (
                                            producto.comentarios.map((comentario, index) => (
                                                <div key={index} className="comentario mb-3">
                                                    <strong>{comentario.usuario}</strong> - <em>{comentario.fecha}</em>
                                                    <p>{comentario.mensaje}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No hay comentarios disponibles.</p>
                                        )}
                                    </div>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetalleProducto;
