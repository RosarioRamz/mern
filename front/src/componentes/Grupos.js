import React from 'react'

function Grupos() {
  console.log("ya llegué")
  return (
    <div className='container grid'>
      <div className="row row-cols-12">
        <nav class="navbar navbar-expand-lg navbar-light blue fixed-top">
          <button id="sidebarCollapse" class="btn navbar-btn">
            <i class="fas fa-lg fa-bars"></i>
          </button>
          <a class="navbar-brand">
            <h3 id="logo">CEODON</h3>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" id="link" href="">
                  <i class="fas fa-id-card"></i></a>
              </li>

              <li class="nav-item active">
                <a class="nav-link" id="link" href=""></a>
                <a href="login.html"><i class="fas fa-sign-out-alt"></i></a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="wrapper fixed-left">
        <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"></img>
        <strong>mdo</strong>
      </a>
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
                          <a href="guardar.html" class="btn btn-primary btn-block" type="button">+ Agregar</a>
                          &nbsp;&nbsp;
                        </div>
                      </div>
                      </div>
                      
                      <div class="card-body" >
                      <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Grupo</th>
                            <th scope="col">Total alumnos</th>
                            <th scope="col">Doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <th scope="row">613A</th>
                                <td>20 </td>
                                <td>Dr. Francisco Gutiérrez Avendaño</td>
                                
                                </tr>
                            <tr>
                            <th scope="row">613B</th>
                                <td>35</td>
                                <td>Dra. Maritza Sanches Martínez</td>
                                
                                </tr>
                            <tr>
                            <th scope="row">613C</th>
                                <td>30</td>
                                <td>Dr. Luis Ortiz Gómez</td>
                            </tr>   
                            <tr>
                            <th scope="row">813A</th>
                                <td>25</td>
                                <td>Dra. Samanta Mendiola Campos </td>
                                
                                </tr>
                                <tr>
                            <th scope="row">813B</th>
                                <td>32</td>
                                <td>Dr. Javier Muñoz Cardoza</td>
                                
                                </tr>
                                <tr>
                            <th scope="row">1013A</th>
                                <td>15</td>
                                <td>Dra. Maritza Sanches Martínez</td>
                                
                                </tr>
                                <tr>
                            <th scope="row">1013B</th>
                                <td>20</td>
                                <td>Dra. Samanta Mendiola Campos</td> 
                            </tr>
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
export default Grupos