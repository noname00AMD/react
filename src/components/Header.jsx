import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import "../sass/header.sass"
class Header extends React.Component {
    render() {
        return (<>
            <div className="header ">
            <button>LOGIN</button>
                
            </div>
        </>);
    };
}


export default Header;

