import React, { Component } from "react";

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false
    };
  }

  handleDelete = () => {
    this.props.delete(this.props.id)
  }

  handleEdit = () => {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value})
  }
  
  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task)
    this.setState({isEditing: false})
  }

  render(){
    let result = (
      <div>
        <li>{this.props.task}</li>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
    if (this.state.isEditing){
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Done</button>
          </form>
        </div>
      );
    }
    return result;
  }
}

export default Todo;