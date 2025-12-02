import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

function ListaProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3002/api/productos')
            .then((response) => setProductos(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h1 className="card-title">-Productos-</h1>
                            </div>

                            <div className="card-body">

                                <div className="filter-container p-0 row">

                                    {productos.map((producto) => (
                                        <div
                                            key={producto.id}
                                            className="filtr-item col-sm-2 product-card"
                                        >

                                            {/* ENLACE A DETALLE DEL PRODUCTO */}
                                            <Link to={`/productos/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <div className="product-thumb-container">
                                                    <img
                                                        src={producto.imagen}
                                                        alt={producto.nombre}
                                                        className="product-thumb"
                                                    />
                                                </div>
                                                <div className="producto-nombre-container">
                                                    <h7 className="producto-nombre">
                                                        {producto.nombre}
                                                    </h7>
                                                </div>
                                            </Link>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListaProductos;
