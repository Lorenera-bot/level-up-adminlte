import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Logo */}
      <Link to="/" className="brand-link">
        <img
          src="/LogoNuevo.png"
          alt="Level-Up Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">LEVEL-UP</span>
      </Link>

      <div className="sidebar">
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Home</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/productos" className="nav-link">
                <i className="nav-icon fas fa-gamepad"></i>
                <p>Productos Gamer</p>
              </Link>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-th-large"></i>
                <p>
                  Categorías
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/categoria/consolas" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Consolas</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/categoria/perifericos" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Periféricos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/categoria/sillas" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Sillas Gamer</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/reportes" className="nav-link">
                <i className="nav-icon fas fa-chart-line"></i>
                <p>Reportes de Ventas</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/configuracion" className="nav-link">
                <i className="nav-icon fas fa-cog"></i>
                <p>Configuración</p>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
