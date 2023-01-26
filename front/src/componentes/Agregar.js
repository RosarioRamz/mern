import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import NavBar from './NavBar'

function Agregar() {
    const navigate = useNavigate()
    const[nombre,setNombre] =useState("")
    const[matricula,setMatricula] =useState("")
    const[estado,setEstado] =useState("")
    const[pacientes,setPacientes] =useState(0)
    

    useEffect(()=>{
        console.log("agregar --")
    })

    const guardarRegistro = async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3002/agregarRegistro",{
                nombre,
                matricula,
                estado,
                pacientes
            })
            navigate("/listar")
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>

        <NavBar />
        <div class="container">
            <h1>Agregar</h1>
            <form onSubmit={guardarRegistro}>
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
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        </div>
    )
}
export default Agregar

