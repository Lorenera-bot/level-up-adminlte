import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import ListaProductos from './components/lista_productos';


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