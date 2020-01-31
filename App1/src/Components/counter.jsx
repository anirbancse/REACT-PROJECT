import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleClicked = this.handleClicked.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Component unmount..");
  }

  render() {
    //console.log("Inside counter componenet", this.props.value);
    console.log("Counter rendered....");
    return (
      <React.Fragment>
        <h3>Counter {this.props.counter.id}</h3>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </React.Fragment>
    );
  }

  //   doHandleIncerement = () => {
  //     this.handleClicked(1);
  //   };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value; //JSX expression are just like normal java script objects
  }
}

export default Counter;
