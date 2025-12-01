import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Productos from './pages/components/productos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        
      </Routes>
    </Router>


  );
}

export default App;
