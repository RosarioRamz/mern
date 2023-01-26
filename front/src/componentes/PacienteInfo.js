

import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { FaPencilAlt } from 'react-icons/fa'
import SideLeft from './pacienteInfo/SideLeft'



function PacienteInfo() {
  const navigate = useNavigate()
  console.log("ya llegué pacientes")

  function Agregar() {
    const navigate = useNavigate()
    const [tipo, setTipo] = useState("")
    const [nombreP, setnombreP] = useState("")
    const [ApellidosP, setApellidosP] = useState("")
    const [INE, setINE] = useState("")
    const [Convenio, setConvenio] = useState("")
    const [NumeroCasa, setNumeroCasa] = useState("")
    const [Sexo, setNumeroSexo] = useState("")
    const [DiaNacimiento, setDiaNacimiento] = useState(0)
    const [MesNacimiento, setMesNacimiento] = useState(0)
    const [AnioNacimiento, setAnioNacimiento] = useState(0)
    const [Ciudad, setCiudad] = useState("")
    const [Colonia, setColonia] = useState("")
    const [Dirección, setDirección] = useState("")
    const [Telefono, setTelefono] = useState(0)
    const [Profesión, setProfesión] = useState("")





    useEffect(() => {
      console.log("agregar --")
    })

    const guardarRegistro = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3002/pacienteagregarRegistro", {
          tipo,
          nombreP,
          ApellidosP,
          INE,
          Convenio,
          NumeroCasa,
          Sexo,
          DiaNacimiento,
          MesNacimiento,
          AnioNacimiento,
          Ciudad,
          Colonia,
          Dirección,
          Telefono,
          Profesión
        })
        navigate("/listar")
      } catch (error) {
        console.log(error)
      }
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


                      {/* inicio del contenedor paciente info */}

                      <div class="container-fluid">
                        <div class="row flex-nowrap">
                          <SideLeft />

                          {/* card principal del paciente */}
                          <div class="col py-12">
                            <div class="card-body" >
                              <h4>&nbsp; Datos personales</h4>
                              <br />
                              <form>

                                <div class="form-group row">
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Tipo</label>
                                  <div class="col-sm-10">
                                    <select id="inputState" class="form-control">
                                      <option selected>-</option>
                                      <option>O+</option>
                                      <option>O-</option>
                                      <option>A+</option>
                                      <option>A-</option>
                                    </select>
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Nombre</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el nombre" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Apellidos</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el apellido" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">CURP</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa la CURP" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">E-MAIL</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el correo electrónico" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Convenio</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el convenio" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Número interno</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el número de tu casa" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Sexo</label>
                                  <div class="col-sm-10">
                                    <select id="inputState" class="form-control">
                                      <option selected>-</option>
                                      <option>Masculino</option>
                                      <option>Femenino</option>
                                    </select>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Fecha de nacimiento</label>
                                  <div class="col-sm-2">
                                    <select id="inputState" class="form-control">
                                      <option selected>-</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                    </select>
                                  </div>
                                  <div class="col-sm-5">
                                    <select id="inputState" class="form-control">
                                      <option selected>-</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
                                      <option>10</option>
                                      <option>11</option>
                                      <option>12</option>
                                    </select>
                                  </div>
                                  <div class="col-sm-3">
                                    <select id="inputState" class="form-control">
                                      <option selected>-</option>
                                      <option>2020</option>
                                      <option>2021</option>
                                      <option>2022</option>
                                      <option>2023</option>
                                      <option>2024</option>
                                      <option>2025</option>
                                    </select>
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Ciudad</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa la ciudad" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Colonia</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa la comuna" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Dirección</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa la dirección" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Teléfono móvil</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa el número del móvil" />
                                  </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                  <label for="inputPassword" class="col-sm-2 col-form-label">Actividad o profesión</label>
                                  <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Ingresa la profesión" />
                                  </div>
                                </div>
                                <br />
                              </form>
                            </div>
                            <div class="form-group row">
                              <div class="col-sm-2">
                                <button type="button" class="btn btn-success">Guardar</button>
                              </div>
                              <div class="col-sm-7">
                              </div>
                              <div class="col-sm-3">
                                <button type="button" class="btn btn-danger">Eliminar registros</button>
                              </div>
                            </div>
                            <br />
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