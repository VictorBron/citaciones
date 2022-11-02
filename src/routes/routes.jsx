import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/home/home";
import Admin from "../pages/admin-trabajadores/admin_trabajadores";
import Registro from "../pages/registro_trabajadores/registro_trabajadores";
import Citaciones from "../pages/citaciones/citaciones";
import Historial from "../pages/historial/historial";
import Citar from "../pages/citar/Citar";
import Modificar from "../pages/modificar-trabajadores/modificar";
const RouterPrincipal = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/citaciones" element={<Citaciones/>}/>
            <Route path="/historial/:id" element={<Historial/>}/>
            <Route path="/citar/:id" element={<Citar/>}/>
            <Route path="/modificar/:id" element={<Modificar/>} />
        </Routes>
    </BrowserRouter>
    );
};

export default RouterPrincipal;