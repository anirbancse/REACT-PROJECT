import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Components/Todos";
import Header from "./Components/Header";
import About from "./Components/pages/About";
import AddTodo from "./Components/AddTodo";
import axios from "axios";
import Signup from "./Components/pages/SignUp";

class App extends Component {
  state = {
    todos: [],
    about: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  // Toggle Status
  markComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
    //console.log("add...");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <React.Fragment>
                  <h1>About</h1>
                  <p>This is TodoApp Version: 1.0.0</p>
                  <About />
                </React.Fragment>
              )}
            />
            <Route path="/signup" />
            <Signup />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
