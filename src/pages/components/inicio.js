import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Level-Up Gamer</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>

                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="m-0">-Quienes Somos-</h5>
                                    <p className="card-text">
                                        Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los entusiastas de los videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda durante la pandemia, Leves-Up Gamer ofrece una amplia gama de productos para gamers, desde consolas y accesorios hasta computadores y sillas especializadas. Aunque no cuenta con una ubicación física, realiza despachos a todo el país.
                                    </p>

                                </div>
                            </div>
                            <div className="card card-primary card-outline">
                                <div className="card-body">
                                    <h5 className="m-0">-Misión-</h5>
                                    <p className="card-text">
                                        Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia de compra única y personalizada, con un enfoque en la satisfacción del cliente y el crecimiento de la comunidad gamer.
                                    </p>

                                </div>
                            </div>{/* /.card */}
                            <div className="card card-primary card-outline">
                                <div className="card-body">
                                    <h5 className="m-0">-Visión-</h5>
                                    <p className="card-text">
                                        Ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación, servicio al cliente excepcional, y un programa de fidelización basado en gamificación que recompense a nuestros clientes más fieles.
                                    </p>

                                </div>
                            </div>{/* /.card */}
                        </div>
                        {/* /.col-md-6 */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="m-0">Bienvenidos a Level-Up Gamer</h5>
                                </div>
                                <div className="card-body">

                                    <p className="card-text">Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los entusiastas de los videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda durante la pandemia, Leves-Up Gamer ofrece una amplia gama de productos para gamers, desde consolas y accesorios hasta computadores y sillas especializadas.

                                        Aunque no cuenta con una ubicación física, realiza despachos a todo el país..</p>

                                    <Link
                                        to="/productos"
                                        className="btn btn-verproductos"
                                                                            >
                                        <i className="fas fa-gamepad mr-2"></i>
                                        Ver Productos
                                    </Link>
                                </div>
                            </div>

                        </div>
                        {/* /.col-md-6 */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>



    );

}

export default Inicio;