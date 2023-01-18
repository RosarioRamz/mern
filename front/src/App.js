import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Listar from './componentes/Listar';
import Editar from './componentes/Editar';
import Agregar from './componentes/Agregar';
import Login from './componentes/Login';
import Inicio from './componentes/Inicio';
import Grupos from './componentes/Grupos';
import Home from './componentes/Home';
import Pacientes from './componentes/Pacientes';
import Administracion from './componentes/Administracion';
import PacienteInfo from './componentes/PacienteInfo';

function App() {

  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path='inicio' element={<Inicio/>}/>
          <Route exact path='agregar' element={<Agregar/>}/>
          <Route exact path='editar' element={<Editar/>}/>
          <Route exact path='pacientes' element={<Pacientes/>}/>
          <Route exact path='administracion' element={<Administracion/>}/>
          <Route exact path='pacienteInfo' element={<PacienteInfo/>}/>
        </Routes>
        </Router>


  )


}

export default App;
