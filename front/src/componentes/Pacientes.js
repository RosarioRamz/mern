import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

import axios from 'axios'


function Pacientes() {
  const navigate = useNavigate()
  const [paciente, setPacientes] = useState([])



  useEffect(() => {
    getPaciente()

  }, [])

  const getPaciente = async () => {
    console.log("ya llegué pacientes88")
    const response = await axios.get("http://localhost:3002/paciente/obtenerRegistros")
    setPacientes(response.data)
  }
  const eliminarPaciente = async (id) => {
    try {
      console.log('Hola lleghue pacientes')
      await axios.get(`http://localhost:3002/paciente/eliminarRegistro/${id}`)
      getPaciente()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <NavBar />

      <div className='container grid'>
        <h1>Listar</h1>

        <div class="row">
                      <div class="form-group col-md-8"></div>
                      <div class="form-group col-md-4">
                        <div class="d-grid gap-2 text-right">
                       <button className="btn btn-primary " aria-current="page" onClick={()=>navigate('/agregar')} >Agregar paciente</button>
                        </div>
                      </div>
                      </div>
                      <br></br>

        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">CURP</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Tipo de sangre</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {paciente.map((paciente, i) => (
              <tr key={paciente.id}>
                <td>{paciente.INE}</td>
                <td>{paciente.NombreP}</td>
                <td>{paciente.ApellidosP}</td>
                <td>{paciente.Correo}</td>
                <td>{paciente.Telefono}</td>
                <td>{paciente.Tipo}</td>
                <td><button onClick={() => eliminarPaciente(paciente._id)}><h6><FaTrashAlt /></h6></button></td>
                <td>
                  <Link to={`../editarPaciente/${paciente._id}`}
                    className="button is-info is-small"><h6><FaPencilAlt /></h6>
                  </Link>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>

    </div>

  )

}
export default Pacientes