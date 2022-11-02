import React from "react";
import "./admin.styles.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Content from "../../components/content_admin/content_admin";
const Admin = ()=>{
    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Admin;