import React from "react";
import Title from "./subcomponentes/Title";
import Users from "./subcomponentes/Users";
import Search from "./subcomponentes/Search";
import Bell from "./subcomponentes/Bell";
import "../../ui/header/header.css"


const Header = () => {

    const user= {
        name:'Lisa Marie Simpsom​',
        urlImage: 'https://i.pinimg.com/736x/25/36/35/253635aa6fe30a74ce5833fa99659a54.jpg',
    };

    return (
        <div className="dad">
            <div className="son"><Title Page="/ Header" /></div>
            <div className="son"><Search /></div>
            <div className="son"><Bell /> </div>
            <div className="son"> <Users user={user}/></div>
        </div>
        
     
        
    )
}

export default Header;

