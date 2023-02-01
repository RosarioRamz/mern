import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FaAtlas } from 'react-icons/fa'
import { FaRegFileAlt } from 'react-icons/fa'
import { FaSignOutAlt} from 'react-icons/fa'
import { useNavigate, useParams} from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav class="navbar navbar-expand-lg navbar-light blue ">
            <a class="navbar-brand">
                <h3 id="logo">CEODON</h3>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" onClick={()=>navigate('/pacientes')}><h6><FaRegUser />  Pacientes </h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={()=>navigate('/administracion')}><h6><FaAtlas />Administración </h6> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h6><FaRegFileAlt />Reportes</h6></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h6><FaSignOutAlt />Salir</h6></a>
                    </li>
                </ul>
               
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" id="link" href="">
                           </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;