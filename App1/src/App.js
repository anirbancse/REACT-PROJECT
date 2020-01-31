import React, { Component } from "react";
import Navbar from "./Components/navbar";
import "./App.css";
import Counters from "./Components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 2 }, { id: 3, value: 3 }]
  };

  constructor() {
    //called once and able to initialize props
    super();
    console.log("Constructor called....");
  }

  componentDidMount() {
    console.log("App - Mounted");
    //ajax calls
    this.setState({});
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleClicked = counter => {
    const counters = [...this.state.counters]; //cloneing the obejct from state
    const index = counters.indexOf(counter); //finding the index
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  render() {
    console.log("App -Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onClicked={this.handleClicked}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
