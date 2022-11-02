import React from "react";
import "./content_admin.styles.css";
import ShowTrabajadores from "../showTrabajadores/showTrabajadores";
import { Link } from "react-router-dom";
const Content = ()=>{
    return(
        <div className="content_admin">
            <div className="box">
                <h1 className="text-center">Trabajadores registrados</h1>
                <Link to="/registro" className="btn btn-primary linkk">Registrar trabajador</Link>
            </div>

            <ShowTrabajadores/>
        </div>
    )
};

export default Content;