import './sass/app.sass';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Todo from "./components/Todo.jsx";
import Header from "./components/Header.jsx";

class App extends React.Component {
    render() {
        return (
            <>

                <Header />
                <Router>
                    <Switch>
                        <Route index element={<Home />} ></Route>
                        <Route path="/todo" element={<Todo />}>                        </Route>
                        <Route path="/about" element={<About />}>                        </Route>
                    </Switch>
                </Router>
            </>

        );
    }
}


export default App;
