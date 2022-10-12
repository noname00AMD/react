import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
	 handleClick() {
    this.setState(prevState => ({
      				isToggleOn: !prevState.isToggleOn
    }));
  }
      render() {
    return (
      <button onClick={this.handleClick}>
        						{this.state.isToggleOn ? 'ON' : 'OFF'}
      		</button>
    );
  }
}


export default About;

