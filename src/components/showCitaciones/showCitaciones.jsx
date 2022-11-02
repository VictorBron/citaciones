import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowCitaciones = ({id})=>{
    const BASE_API="http://localhost:8000/api";
    const [citaciones,setCitaciones] = useState([]);
    const [trabajador,setTrabajador] = useState({});
    console.log(id);
    useEffect(()=>{
       getData();
       getDataTrabajador();
    },[]);  
    
    const getData = async ()=>{
        const response = await axios.get(`${BASE_API}/citaciones/${id}`);    
        setCitaciones(response.data);
        console.log(response.data);
    }
    const getDataTrabajador = async()=>{
        const response  = await axios.get(`${BASE_API}/trabajador/${id}`);
        setTrabajador(response.data);
    };
    const formato = (texto)=>{
            return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
    }
    return(
        <div>
            <h1>Historial de citaciones, Trabajador: {trabajador.nombre} {trabajador.apellido} </h1>
            <table className="w-75 table table-hover">
            <thead>
                <tr>
                   
                    <th>Turno</th>
                    <th>Fecha citacion</th>
                </tr>
            </thead>
            <tbody>
                {
                    citaciones.map((citacion,index)=>{
                        return(
                            <tr key={index}>
                                <td>{citacion.nombre_turno}</td>
                                <td>{ formato(citacion.fecha_citacion) }</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        
    )
}

export default ShowCitaciones