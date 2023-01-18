
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import NavBar from './NavBar'

function Editar() {
    const navigate = useNavigate()
    const[matricula,setMatricula] = useState("")
    const[nombre,setNombre] = useState("")
    const[estado,setEstado] = useState("")
    const[pacientes,setPacientes] = useState("")
    const {id} = useParams();
    useEffect(()=>{
        console.log("editando")
        obtenerUsuarioPorId()
    },[])

    const obtenerUsuarioPorId = async()=>{
        const response = await axios.get(`http://localhost:3002/obtenerRegistro/${id}`)
        setMatricula(response.data.matricula)
        setNombre(response.data.nombre)
        setEstado(response.data.estado)
        setPacientes(response.data.pacientes)
    }
    const actualizarUsuario = async(e)=>{
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3002/editarRegistro/${id}`,{
                matricula,
                nombre,
                estado,
                pacientes
            })
            navigate ("/listar")
        } catch (error) {
            console.log(error)
        }
    }   
    return (
        <div>

        <NavBar />
        <div class="container">
            <h1>Editar</h1>
            <form onSubmit={actualizarUsuario}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
                <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="nombre" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre completo"></input>
                <label for="exampleFormControlInput1" class="form-label">Matrícula:</label>
                <input value={matricula} onChange={(e)=> setMatricula(e.target.value)}type="matricula" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su matrícula"></input>
                <label for="exampleFormControlInput1" class="form-label">Status:</label>
                <input  value={estado} onChange={(e)=> setEstado(e.target.value)}type="status" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su estado"></input>
                <label for="exampleFormControlInput1" class="form-label">Pacientes:</label>
                <input value={pacientes} onChange={(e)=> setPacientes(e.target.value)}type="pacientes" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su número de pacientes"></input>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar</button>
            </form>
        </div>
        </div>
    )
}
export default Editar