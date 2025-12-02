import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Productos from './pages/productos';
import Reporte from './pages/reporte';
import Producto from './pages/producto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/productos/:id' element={<Producto/>}></Route>
        <Route path='/reportes' element={<Reporte/>}></Route>
      </Routes>
    </Router>


  );
}

export default App;
