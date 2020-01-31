import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="card p-10000 w-10000 mb-0" style={{ maxwidth: "100%" }}>
          <br></br>
          <form className="form-type-material" onSubmit={this.onSubmit()}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Enter your fullname"
                required={true}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your middle name"
                name="middleName"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter you last name"
                name="lastName"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="confirm password"
                name="confirm password"
              />
            </div>
            <div className="square-button">
              <input type="submit" style={btnstyle} value="Submit" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  onSubmit = e => {
    console.log("Submitted...");
    axios.put();
  };
}
const btnstyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  float: "center",
  cursor: "pointer"
};
export default Signup;
