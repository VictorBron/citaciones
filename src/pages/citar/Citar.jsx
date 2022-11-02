import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Content_citar from "../../components/content_citar/content_citar";
import "./citar.styles.css";
const Citar = ()=>{
    const parametros = useParams();
    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <Content_citar id={parametros.id} />
        </div>
    )
};


export default Citar;