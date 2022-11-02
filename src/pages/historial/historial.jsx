import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Content_historial from "../../components/content_historial/content_historial";
import "./historial.styles.css";

const Historial = ()=>{


    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <Content_historial/>
        </div>
    )
};


export default Historial;