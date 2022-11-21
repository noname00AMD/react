import "./sass/app.sass";
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx';
function App() {

    var [name, setName] = useState("")
    useEffect(() => {

    }, [name]);
    return (
        <>
            <Header />
            <main>
                <Hero></Hero>
            </main>

        </>
    )
}

export default App;
