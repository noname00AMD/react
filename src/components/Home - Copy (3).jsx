import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (<>
            <header >
              <NavLink to={"/"} exact>home</NavLink>
              <NavLink to={"/todo"}>todo</NavLink>
              <NavLink to={"/about"}>about</NavLink>
            </header>
        </>);
    };
}


export default Header;

