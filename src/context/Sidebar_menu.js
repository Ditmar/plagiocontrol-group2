import React, { useState } from "react";
import icon_11 from "./iconos/icon_11.png";
import icon_22 from "./iconos/icon_22.png";
import icon_33 from "./iconos/icon_33.png";
import icon_44 from "./iconos/icon_44.png";
import icon_55 from "./iconos/icon_55.png";
import icon_66 from "./iconos/icon_66.png";
import icon_77 from "./iconos/icon_77.png";
import logo1 from "./iconos/logo1.png";
import BurgerBotton from "./BurgerButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Sidebar_menu.scss";
const Sidebar_menu = () => {
    const [Clicked,setCliked] = useState(false);
    const handlerClick = ()=>{
        setCliked(!Clicked);
    }
    console.log(Clicked);
    return (
        <Router>
            <div className="burguer">
              <BurgerBotton Clicked={Clicked} handlerClick={handlerClick}/>
            </div>
            <div className={Clicked ? 'sidebar2':'sidebar'}>
                <ul>
                    
                    <div className="div2"><img className="logo" src={logo1}/>Plagio Control</div>
                    <li>
                        <img src={icon_11}/>
                        <Link src ={icon_11} to="/">Inicio</Link>
                    </li>
                    <li>
                        <img src={icon_22}/>
                        <Link to="/works">Trabajos</Link>
                    </li>
                    <li>
                        <img src={icon_33}/>
                        <Link to="/review">Revisar Tesis</Link>
                    </li>
                    <li>
                        <img src={icon_44}/>
                        <Link to="/">Listar Tesis</Link>
                    </li>
                    <li>
                        <img src={icon_55}/>
                        <Link to="/">Publicar Tesis</Link>
                    </li>
                    <li>
                        <img src={icon_66}/>
                        <Link to="/">Reportes Generales</Link>
                    </li>
                    <hr/>
                    <li>
                        <img src={icon_77}/>
                        <Link to="/">Settings</Link>
                    </li>
                </ul>
                
            </div>
        </Router>
        
    )
}
export default Sidebar_menu;