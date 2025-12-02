import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Inicio from './components/inicio';

function Home() {
    return (
        <div>
            <NavBarPrincipal/>
             <SideMenu/>
             <Inicio/>
        </div>

    );
}

export default Home;