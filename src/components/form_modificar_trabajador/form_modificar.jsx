import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form_modificar = ({id})=>{
    
    const BASE_API = "http://localhost:8000/api";
    
    const [rut,setRut] = useState({rut: ""});
    const [nombre,setNombre] = useState({nombre:"" });
    const [apellido,setApellido] = useState({apellido:""});
    const [correo, setCorreo] = useState({correo:""});
    const [telefono,setTelefono] = useState({telefono:""});
    const navigate = useNavigate();

    useEffect(()=>{
        getDataTrabajador();
    },[]);
    const getDataTrabajador = async()=>{
        const response = await axios.get(`${BASE_API}/trabajador/${id}`);

        setRut(response.data.rut);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setCorreo(response.data.correo);
        setTelefono(response.data.telefono);
    };  
    
    const update = async(e)=>{
        e.preventDefault();
        let confirmar = confirm("¿Estás seguro de los datos?");

        if(confirmar){
            const data = {
                rut:rut,
                nombre:nombre,
                apellido:apellido,
                correo:correo,
                telefono:telefono,
                id_estado: 2,
              
            }
            const response2 = await axios.put(`${BASE_API}/trabajador/${id}`,data);
            console.log(response2);
            navigate("/admin");
        }
        
    }

    return (
        <form className="row w-75 ms-2" onSubmit={update}  >
            <div>
                <div className="col-6">
                    <label>Rut</label>
                    <input type="text" value={rut} required onChange={(e)=> setRut(e.target.value) }  className="form-control" />
                </div>
                <div className="col-6">
                    <label>Nombre</label>
                    <input type="text" value={nombre}  onChange={(e)=> setNombre(e.target.value) }  className="form-control" />
                </div>
                <div className="col-6">
                    <label>Apellido</label>
                    <input type="text" value={apellido} required  onChange={(e) => setApellido(e.target.value) }  className="form-control" />
                </div>
                <div className="col-6">
                    <label>Correo</label>
                    <input type="email" value={correo} required onChange={(e) => setCorreo(e.target.value) } className="form-control" />
                </div>
                <div className="col-6">
                    <label>Teléfono</label>
                    <input type="number" value={telefono} required onChange={(e)=> setTelefono(e.target.value) }  className="form-control" />
                </div>

                <div className="col-6 d-flex align-items-center mt-2 justify-content-center">
                    <button className="btn btn-primary" type="submit">Modificar</button>
                </div>
            </div>

        </form>
    )
};

export default Form_modificar;