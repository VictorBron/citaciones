import React, { useState } from "react";
import "./registro.styles.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registro = ()=>{
    const BASE_API = "http://localhost:8000/api";
    const [rut,setRut] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [correo,setCorreo] = useState("");
    const [telefono,setTelefono] = useState("");

    const navigate = useNavigate();

    const store = async(e) =>{
        e.preventDefault();
        let respuesta = confirm("¿Estás seguro/a de todos los datos?")

        if(respuesta){
            const response = await axios.post(`${BASE_API}/trabajador`,{
                rut: rut,
                nombre:nombre,
                apellido:apellido,
                correo: correo,
                telefono: telefono,
                id_estado: 2
            })
            console.log(response.data);
            navigate("/admin");
        }

       

        
    };

    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <div className="w-75 mt-5">
                <form className="row form p-3 w-75 m-auto border d-flex" method="POST" onSubmit={store} >
                    <h1 className="h1">Registro de trabajador</h1>
                    <div className="col-5 mb-3">
                        <label>Rut</label>
                        <input type="text" required className="form-control" onChange={(e)=> setRut(e.target.value)} />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Nombre</label>
                        <input type="text" onChange={(e)=> setNombre(e.target.value) } required className="form-control" />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Apellido</label>
                        <input type="text" required onChange={(e)=> setApellido(e.target.value) }  className="form-control" />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Correo</label>
                        <input type="email" onChange={(e) => setCorreo(e.target.value)} required className="form-control" />
                    </div>
                    <div className="col-5 mb-3">
                        <label>Teléfono</label>
                        <input type="number" onChange={(e)=> setTelefono(e.target.value)} required className="form-control" />
                    </div>
                    <div className="col-5">
                        <input className="w-100 btn btn-primary" type="submit" value="Enviar datos" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}


export default Registro;