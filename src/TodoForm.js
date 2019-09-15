import React, { Component } from "react";
import uuid from "uuid/v1";

class TodoForm extends Component {
  state = {newTodo:""}
  
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.create({task: this.state.newTodo, id: uuid(), isEditing: false})
    this.setState({newTodo: ""})
  }
  
  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Task:</label>
          <input 
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;