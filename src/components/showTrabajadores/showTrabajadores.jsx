import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const ShowTrabajadores = ()=>{
    const [trabajadores,setTrabajadores] = useState([]);
    const url = "http://localhost:8000/api/trabajadores";
    const BASE_API = "http://localhost:8000/api/trabajador";
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        getAllTrabajadores();
    },[])

    const getAllTrabajadores = async()=>{
        const response = await axios.get(url);
        setTrabajadores(response.data);
        setLoading(true);
    };
    const deleteTrabajador = async (id)=>{
        
        let respuesta = confirm("Desea eliminar este usuario?");
        console.log(respuesta);
        if(respuesta){
            await axios.delete(`${BASE_API}/${id}`);
            getAllTrabajadores();    
        }
       
    }
    if(loading){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trabajadores.map((trabajador,index)=>{
                            return(
                                <tr key={index}>
                                <td>{trabajador.id}</td>
                                <td>{trabajador.rut}</td>
                                <td>{trabajador.nombre}</td>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.correo}</td>
                                <td>{trabajador.telefono}</td>
                                <td>
                                    <EditIcon className="iconn" onClick={()=> navigate(`/modificar/${trabajador.id}`) } />
                                    <DeleteIcon className="iconn" onClick={()=> deleteTrabajador(trabajador.id) } />
                                </td>
                            </tr>
                            )
                           
                        })
                    }
                  
                </tbody>
            </table>
        );
    
    }else{
        <div>
            Cargando data
        </div>
    }
    
    
};

export default ShowTrabajadores;