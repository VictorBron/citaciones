import axios from "axios";
import React, { useEffect, useState } from "react";
import "./content.styles.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const ContentCitaciones = ()=>{
    const BASE_API = "http://localhost:8000/api";
    
    const [trabajadores,setTrabajadores] = useState([]);
    useEffect(()=>{
        getAllTrabajadores();
    },[]);
    const getAllTrabajadores = async ()=>{
        const response = await axios.get(`${BASE_API}/trabajadores`);
        setTrabajadores(response.data);
        console.log(response.data);
    }

    return(
        <div>
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
                                
                                 <Link className="btn btn-primary" to={`/citar/${trabajador.id}`}>Citar</Link>  
                                
                                <Link to={`/historial/${trabajador.id}`}  className="ms-1 btn btn-success">Ver Historial</Link>
                            </td>
                        </tr>
                        )
                    
                    })
                }
            
            </tbody>
        </table>
        </div>
    )
};

export default ContentCitaciones;