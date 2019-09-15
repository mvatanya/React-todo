import React, { Component } from "react";
import Todo from "./Todo"
import TodoForm from "./NewTodoForm"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  };

  createTodo = (newTodo) => {
    this.setState(st => ({
      todos: [...st.todos, newTodo]
    }))
  }

  deleteTodo = (id) => {
    this.setState(st => ({
      todos: st.todos.filter(todo => todo.id !== id)
    }))
  }
  
  updateTodo = (id, updatedTask) => {
    this.setState(st => ({
      todos: st.todos.map(todo => {
        return todo.id === id ? {...todo, task: updatedTask} : todo
      })
    }))
  }

  render(){
    const todos = this.state.todos.map(todo => (
      <Todo 
        delete = {this.deleteTodo}
        key = {todo.id}
        id = {todo.id}
        task = {todo.task}
        update = {this.updateTodo}
      />
    ));

    return(
      <div>
        <TodoForm create = { this.createTodo }/>
        <ul>{todos}</ul>
      </div>
    )
  }

}

export default TodoList;