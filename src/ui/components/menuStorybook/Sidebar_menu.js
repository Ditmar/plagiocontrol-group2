import React, { useState } from 'react';
import BurgerButton from './BurgerButton';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon_11 from './iconos/icon_11.png';
import icon_22 from './iconos/icon_22.png';
import icon_33 from './iconos/icon_33.png';
import icon_44 from './iconos/icon_44.png';
import icon_55 from './iconos/icon_55.png';
import icon_66 from './iconos/icon_66.png';
import icon_77 from './iconos/icon_77.png';
import logo1 from './iconos/logo1.png';
import './Sidebar_menu.scss';
import { PropTypes } from 'prop-types';

const Sidebar_menu = ({ name = "Plagio Control"}) => {
    const [ Clicked, setCliked ] = useState( false );
    const handlerCLick = () => {
        setCliked( !Clicked );
    }
    return (
        <div>
            <div className="burger">
            <BurgerButton Clicked = { Clicked } handlerCLick = { handlerCLick }/>
            </div>
            <div className={Clicked ? 'sidebarMovil':'sidebarDesktop'}>
                <ul>
                    <div className="box"><img className="logo" src={ logo1 }/>
                        <div>{ name }</div>
                    </div>
                        
                        <li>
                            <img src = { icon_11 }/>
                            <Link to = "/">Inicio</Link>
                        </li>
                        <li>
                            <img src = { icon_22 }/>
                            <Link to = "/works">Trabajos</Link>
                        </li>
                        <li>
                            <img src = { icon_33 }/>
                            <Link to = "/review">Revisar Tesis</Link>
                        </li>
                        <li>
                            <img src = { icon_44 }/>
                            <Link to = "/">Listar Tesis</Link>
                        </li>
                        <li>
                            <img src={ icon_55} />
                            <Link to="/">Publicar Tesis</Link>
                        </li>
                        <li>
                            <img src={ icon_66 }/>
                            <Link to="/">Reportes Generales</Link>
                        </li>
                        <hr/>
                        <li className="settingStyles">
                            <img src={ icon_77 }/>
                            <Link to="/" >Settings</Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}
Sidebar_menu.prototype = {
    name: PropTypes.string,
}
export default Sidebar_menu;