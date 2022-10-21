import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
class Header extends React.Component {
    render() {
        return (<>
            <div className="sm-cont">
                <div className="row">
                    <header className={"header col-sm-8 col-xs-11"}>
                            <NavLink to={"/"} exact={true} className={isActive =>
                                "nav-link" + (isActive ? " selected" : "")
                            }>home</NavLink>
                            <NavLink to={"/todo"} className={isActive =>
                                "nav-link" + (isActive ? " selected" : "")
                            }>todo</NavLink>
                            <NavLink to={"/about"} className={isActive =>
                                "nav-link" + (isActive ? " selected" : "")
                            }>about</NavLink>
                    </header>
                    <div style={{ backgroundColor: "red" }} className="col-sm-4 d-xs-none ">
                       
                    </div>
                </div>
            </div>
        </>);
    };
}


export default Header;

