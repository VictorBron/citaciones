import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.styles.css";
import logo from "../../assets/logo.png";
const Home = ()=>{
    return(
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <div className="content">
                <img src={logo} alt="" width="220px" />
            </div>
        </div>
    );
};

export default Home;