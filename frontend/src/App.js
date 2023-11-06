
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Register from './paginas/Register';
import Nosotros from './paginas/Nosotros';
import Contactanos from './paginas/Contactanos';
import Horoscopo from './paginas/Horoscopo';
import Dashboard from './Dashboard/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/nosotros' element={<Nosotros />}></Route>
        <Route path='/contactanos' element={<Contactanos />}></Route>
        <Route path='/horoscopo' element={<Horoscopo />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
