import React, { Component } from "react";
import TodoList from "./TodoList";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: ""
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      item: "",
      items: [...this.state.items, this.state.item]
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            name="item"
          />
          <button>Add Todo</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}
