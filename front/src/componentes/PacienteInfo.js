import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { FaPencilAlt } from 'react-icons/fa'
import SideLeft from './pacienteInfo/SideLeft'



function PacienteInfo() {
  const navigate = useNavigate()
  console.log("ya llegué pacientes")

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


                      {/* inicio del contenedor paciente info */}

                      <div class="container-fluid">
                        <div class="row flex-nowrap">
                          <SideLeft />

                          {/* card principal del paciente */}
                          <div class="col py-3">
                            <div class="card-body" >
                              <h4>&nbsp; PacienteInfo</h4>
                              <div class="row">
                                <div class="form-group col-md-8"></div>
                                <div class="form-group col-md-4">
                                  <div class="d-grid gap-2 text-right">
                                    <button className="btn btn-primary " aria-current="page" onClick={() => navigate('/agregar')} >Agregar Usuario</button>
                                  </div>
                                </div>
                              </div>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Matrícula</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Pacientes</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Editar</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">2018130012</th>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6>Gustavo Sanchez Mendoza</h6> </a>
                                    </td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130065</th>
                                    <td>Kevin Álvarez Jiménez</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130014</th>
                                    <td>Mariana Cruz Santos</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130056</th>
                                    <td>Johana García Brena</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130078</th>
                                    <td>Alan Bicerratea Tinoco</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130010</th>
                                    <td>Brisa Mendez Serrano</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>

                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2018130071</th>
                                    <td>Daniela Lujan Espinoza</td>
                                    <td>8</td>
                                    <td>Adscrito</td>
                                    <td>
                                      <a class="nav-link" onClick={() => navigate('/editar')}><h6><FaPencilAlt /></h6> </a>
                                    </td>
                                  </tr>
                                </tbody>

                              </table>
                            </div>
                          </div>
                          {/* fin del card del paciente */}


                        </div>
                      </div>

                      {/* Cierra el contenedor del paciente info */}



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
export default PacienteInfo