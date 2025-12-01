import React from 'react';
import NavBarPrincipal from './navbar';
import SideMenu from './sidemenu';
import ListaProductos from './lista_productos';

function Productos() {
    return (

       <div>    
        <NavBarPrincipal/>
        <SideMenu/>
        <ListaProductos/>
       </div>

    );
}
export default Productos;