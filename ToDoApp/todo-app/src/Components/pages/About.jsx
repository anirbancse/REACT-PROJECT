import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  state = {
    arr: []
  };

  componentDidMount() {
    axios
      .get("https://localhost:9000/api/about")
      .then(res => this.setState({ arr: res.data }));
  }

  render() {
    return this.state.arr.map((item, key) => (
      <React.Fragment>
        <div style={this.getStyle()} className="values">
          <li>{item.name}</li>
          <li>{item.desc}</li>
          <li>{item.profession}</li>
        </div>
      </React.Fragment>
    ));
  }

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10 px",
      borderBottom: "9px #ccc dotted"
      // textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };
}

export default About;
