import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    //console.log(this.props.todos);

    return this.props.todos.map(c => (
      <TodoItem
        key={c.id}
        todo={c}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default Todos;
