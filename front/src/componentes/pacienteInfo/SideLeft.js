import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaFileMedicalAlt } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'



function SideLeft() {
    return (
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <div class="circular--portrait mx-auto d-block">

                <img src="usuario.jpg"></img>
                </div>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-left px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Rosario Ramírez</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-left">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline"></span> <h6><FaUserCircle /> Datos personales</h6></a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"> </span><h6><FaFileMedicalAlt /> Archivos</h6></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span><h6><FaCalendar /> Citas</h6></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"></span><h6><FaCalendar /> Citas</h6></a>
                    </li>
                   
                </ul>
                <hr />
            </div>
        </div>
    )

}

export default SideLeft