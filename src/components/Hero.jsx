import React from "react";
import bg from "../assets/images/original.jfif";
import logo from "../assets/images/original.svg";
import { useModal } from "../store";
class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.email = ''
        this.mailChange = this.mailChange.bind(this)
        this.sendMail = this.sendMail.bind(this)
    }
    mailChange(e) {
        this.setState((state, props) => ({
            email: e.target.value
        }))
    }
    sendMail(e) {
        var email = this.state.email
        fetch("/subscribe/", {
            body: JSON.stringify({
                email: email,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        }).then(function (res) {
            if (!res.ok) {
                console.log("fecth error");
                return
            }
            res.json().then(function (resuslt) {
                console.log(resuslt);
            });
        })
    }
    render() {
        return (<>
            <div className="hero cont-fluid" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="row content">
                    <div className="col-lg-5 start-2">
                        <img className="logo" src={logo} alt="" />
                        <h1>
                            Stream all your favourites and more.
                        </h1>
                        <p>Enter your email to create or restart your subscription.</p>
                        <div className="row">
                            <div className="col-9">
                                <input type="email" onChange={this.mailChange} placeholder="Email" name="sub" id="" value={this.state.email} />
                            </div>
                            <div className="col-3">
                                <button onClick={this.sendMail} type="submit">CONTINUE</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>);
    };
}


export default Hero;

