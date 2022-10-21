import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
  }
  handleClick = () => {
    var prevState = this.state;
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
    handleChange = (e) => {
    this.setState({value: e.target.value});
  };
  
  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </>
    );
  }
}

export default About;
