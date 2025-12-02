import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Dashboard from './components/dashboard';


function Reporte() {
    return (

       <div>    
        <NavBarPrincipal/>
        <SideMenu/>
        <Dashboard/>
       </div>

    );
}
export default Reporte;