
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { FaPencilAlt } from 'react-icons/fa'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function Inicio() {
  const navigate = useNavigate()
  console.log("ya llegué")
  useEffect(() => {
    getUsuarios()

  }, [])
  const [usuarios, setUsuario] = useState([])
  const getUsuarios = async () => {
    const response = await axios.get("http://localhost:3002/obtenerRegistros")
    setUsuario(response.data)
  }
  const eliminarUsuario = async (id) => {
    try {
      console.log('Hola lleghue')
      await axios.get(`http://localhost:3002/eliminarRegistro/${id}`)
      getUsuarios()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <NavBar />

      <div className='container grid'>
        <div className="row row-cols-12">


          <div class="wrapper fixed-left">
            <div class="dropdown">


            </div>
          </div>


          <div id="content">
            <main class="page-content">
              <div class="container-fluid">
                <div class="row">
                  <div class="form-group col-md-12">
                    <div class="card">
                      <h4>&nbsp; Grupo 613A</h4>
                      <div class="row">
                        <div class="form-group col-md-8"></div>
                        <div class="form-group col-md-4">
                          <div class="d-grid gap-2 text-right">
                            <button className="btn btn-primary " aria-current="page" onClick={() => navigate('/agregarcopy')} >Agregar Usuario</button>
                          </div>
                        </div>
                      </div>

                      <div class="card-body" >

                        <table class="table table-primary table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Matrícula</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Estado</th>
                              <th scope="col">Pacientes</th>
                              <th scope="col">Eliminar</th>
                              <th scope="col">Editar</th>
                            </tr>
                          </thead>
                          <tbody>
                            {usuarios.map((usuario, i) => (
                              <tr key={usuario.id}>
                                <td>{usuario.matricula}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.estado}</td>
                                <td>{usuario.pacientes}</td>
                                <td><button onClick={() => eliminarUsuario(usuario._id)}><h6><FaTrashAlt /></h6></button></td>
                                <td>
                                  <Link to={`../editar/${usuario._id}`}
                                    className="button is-info is-small"><h6><FaPencilAlt /></h6>
                                  </Link>
                                </td>
                              </tr>

                            ))}

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

    </div>

  )

}
export default Inicio