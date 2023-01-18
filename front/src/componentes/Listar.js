
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Listar() {
    useEffect(()=>{
        getUsuarios()

    },[])
    const [usuarios,setUsuario] =useState([])
    const getUsuarios = async()=>{
        const response = await axios.get("http://localhost:3002/obtenerRegistros")
        setUsuario(response.data)
    }
    const eliminarUsuario =async(id)=>{
        try{
            console.log('Hola lleghue')
            await axios.get(`http://localhost:3002/eliminarRegistro/${id}`)
            getUsuarios()
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <div>
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
                        <td><button onClick={()=>eliminarUsuario(usuario._id)}>D</button></td>
                        <td>
                            <Link to= {`../editar/${usuario._id}`} 
                            className="button is-info is-small">E
                            </Link>
                        </td>
                    </tr>
                    
                    ))} 

                </tbody>
            </table>
        </div>
    )
}
export default Listar