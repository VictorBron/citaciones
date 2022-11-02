import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li><Link to="/" className="item d-flex align-items-center"> <HomeIcon/> Inicio</Link></li>
                    <li><Link to="/admin" className="item d-flex align-items-center" ><BadgeIcon/>Trabajadores</Link></li>
                    <li><Link to="/citaciones" className="item d-flex align-items-center"><WorkIcon/>Citaciones</Link></li>
                </ul>
            </nav>
        </div>
    );
};


export default Sidebar;