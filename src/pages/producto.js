import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import DetalleProducto from './components/detalle_producto';


function Producto() {
    return (

       <div>    
        <NavBarPrincipal/>
        <SideMenu/>
        <DetalleProducto/>
       </div>

    );
}
export default Producto;