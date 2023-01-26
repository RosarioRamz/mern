import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { FaPencilAlt } from 'react-icons/fa'

function Listar() {
  useEffect(() => {
    getPaciente()

  }, [])
  const [pacientes, setPacientes] = useState([])
  const getPaciente = async () => {
    const response = await axios.get("http://localhost:3002/pacienteobtenerRegistros")
    setPacientes(response.data)
  }
  const eliminarPaciente = async (id) => {
    try {
      console.log('Hola lleghue pacientes')
      await axios.get(`http://localhost:3002/pacienteeliminarRegistro/${id}`)
      getPaciente()
    } catch (error) {
      console.log(error)
    }
  }

}
function Pacientes() {
  const navigate = useNavigate()
  console.log("ya llegué pacientes")
  return (
    <div>
      <NavBar />

      <div className='container grid'>
        <h1>Listar</h1>

        <table class="table table-success table-striped">
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
                <td><button onClick={() => eliminarUsuario(usuario._id)}>D</button></td>
                <td>
                  <Link to={`../editar/${usuario._id}`}
                    className="button is-info is-small">E
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