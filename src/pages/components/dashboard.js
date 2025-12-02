import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Dashboard() {

    const [productos, setProductos] = useState([]);

    // Función para generar ventas aleatorias
    const generarVentas = () => {
        // Número aleatorio entre 50 y 50.000
        return Math.floor(Math.random() * 50000) + 50;
    };

    // Porcentaje aleatorio positivo (1% - 100%)
    const generarPorcentaje = () => {
        return (Math.random() * 100).toFixed(1);
    };

    useEffect(() => {
        Axios.get('http://localhost:3002/api/productos')
            .then((response) => {

                // AUMENTAR CADA PRODUCTO CON VENTAS RANDOM
                const productosConVentas = response.data.map(prod => ({
                    ...prod,
                    ventas: generarVentas(),
                    porcentaje: generarPorcentaje()
                }));

                setProductos(productosConVentas);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="content-wrapper">

            {/* HEADER */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Reporte Ventas</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Reporte Ventas</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABLA */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10">

                        <div className="card">
                            <div className="card-header border-0">
                                <h3 className="card-title">Productos</h3>
                                
                            </div>

                            <div className="card-body table-responsive p-0">
                                <table className="table table-striped table-valign-middle">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Ventas</th>
                                            <th>Detalle</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {productos.map(prod => (
                                            <tr key={prod.id}>
                                                <td>
                                                    <img
                                                        src={prod.imagen}
                                                        alt={prod.nombre}
                                                        className="img-circle img-size-32 mr-2"
                                                    />
                                                    {prod.nombre}
                                                </td>

                                                <td>
                                                    ${prod.precio.toLocaleString('es-CL')}
                                                </td>

                                                <td>
                                                    <small className="text-success mr-1">
                                                        <i className="fas fa-arrow-up" />
                                                        {prod.porcentaje}%
                                                    </small>
                                                    {prod.ventas.toLocaleString('es-CL')} vendidos
                                                </td>

                                                <td>
                                                    <Link to={`/productos/${prod.id}`} className="text-muted">
                                                        <i className="fas fa-search" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
