import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Register from './paginas/Register';
import Nosotros from './paginas/Nosotros';
import Categorias from './paginas/Categorias';
import Contacto from './paginas/Contacto';
import Picture from './Apis/Picture';
import Iss from './Apis/Iss';
import Astro from './Apis/Space_X';
import HubbleImage from './Apis/Hubble';
import SkyObjects from './Apis/Sky';
import Nasa from './Apis/Nasa';
import SpaceXData from './Apis/Space_X';

//sapce x
import SpaceX from './Apis/Space_X1';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='/nosotros' element={<Nosotros />}></Route>
        <Route path='/categorias' element={<Categorias />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/space' element={<SpaceXData />}></Route>
        <Route path='/picture' element={<Picture />}></Route>
        <Route path='/iss' element={<Iss />}></Route>
        <Route path='/astro' element={<Astro />}></Route>
        <Route path='/hubble' element={<HubbleImage />}></Route>
        <Route path='/sky' element={<SkyObjects />}></Route>
        <Route path='/nasa' element={<Nasa />}></Route>
        <Route path='/space1' element={<SpaceX />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
