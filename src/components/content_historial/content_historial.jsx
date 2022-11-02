import React from "react";
import { useParams } from "react-router-dom";
import ShowCitaciones from "../showCitaciones/showCitaciones";
const Content_historial = ()=>{
    const parametros = useParams();
  
    return(
        <ShowCitaciones id={parametros.id} />
    )
};

export default Content_historial;