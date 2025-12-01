import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function PerfilProducto(){

    const {id} = useParams();
    const [productoNombre, setProductoNombre] = useState('');

    console.log('valor id: ' + id);

  useEffect(() => {
        Axios.get('http://localhost:3002/api/productos/' + id)
            .then((response) => setProductoNombre(response.data.nombre))
            .catch((error) => console.log(error));
    }, []);

    console.log(productoNombre)

}

export default PerfilProducto;
