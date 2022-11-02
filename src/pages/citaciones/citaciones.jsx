import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import ContentCitaciones from "../../components/content_citaciones/content_citaciones";
import "./citaciones.styles.css";
const Citaciones = ()=>{
    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <ContentCitaciones/>
        </div>
    )
};

export default Citaciones;