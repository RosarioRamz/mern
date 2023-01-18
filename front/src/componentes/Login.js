import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'


function Login (){
    const navigate = useNavigate()

        return (
            <div className='container'>
                    <div class="login">
                        <div class="logo">
                            <img src="images/diente.png" width="190" height="130" ></img>
                        </div>
                        <h1>Iniciar sesión</h1>
                        <form>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br></br>
                                <input type="text" name="username"  class="form-control"></input>
                            
                                <label for="password" class="text-info">Contraseña:</label><br></br>
                                <input type="password" name="password"  class="form-control"></input>
                                <div class="row cols-12">
                        
                            </div>
                            </div>
                            <input type="submit" onClick={() => navigate('/inicio')} value="Iniciar sesión"></input>
                        </form>

                    </div>
            </div>
        )
}
export default Login;