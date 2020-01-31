import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10 px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnstyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnstyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer"
};

export default TodoItem;
