import React, { Component } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  };

  create = (newTodo) => {
    this.setState(st => ({
      todos: [...st.todos, newTodo]
    }))
  }

  delete = (id) => {
    this.setState(st => ({
      todos: st.todos.filter(todo => todo.id !== id)
    }))
  }
  
  update = (id, updatedTask) => {
    this.setState(st => ({
      todos: st.todos.map(todo => {
        return todo.id === id ? {...todo, task: updatedTask} : todo
      })
    }))
  }

  render(){
    const todos = this.state.todos.map(todo => (
      <Todo 
        delete = {this.delete}
        key = {todo.id}
        id = {todo.id}
        task = {todo.task}
        update = {this.update}
      />
    ));

    return(
      <div>
        <NewTodoForm createTodo = { this.create }/>
        <ul>{todos}</ul>
      </div>
    )
  }

}

export default TodoList;