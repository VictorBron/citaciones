import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Form_modificar from "../../components/form_modificar_trabajador/form_modificar";
import "./modificar.styles.css";
import { useParams } from "react-router-dom";
const Modificar = ()=>{
    const parametros = useParams();
    const id = parametros.id;
    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <Form_modificar id={id} />
        </div>
    )
};

export default Modificar;