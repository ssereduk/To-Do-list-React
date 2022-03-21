import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem.js';
import todosData from './todosData.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
      todoItems : todosData
    }
  }
  handleChange = id => {
   const index = this.state.todoItems.map(item => item.id).indexOf(id);
   this.setState ( state => {
     let {todoItems} = state;
     todoItems[index].completed = true;
     return todoItems;
   })
  }

  render(){
    const {todoItems} = this.state; 
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finaleTasks = [...activeTasks,...completedTasks].map(item => {
      return (
        <ToDoItem
        key={item.id}
        description={item.description}
        copleted={item.completed}
        handleChange = {() => { this.handleChange(item.id)}}
        />
       )
    })

    
    return (
    <div className="App">
      <h1 className="title">Какике планы на день?</h1>
      <h2 className="titleBlock">Задачи </h2>
      {finaleTasks}
    </div>
    );
  }
 
}

export default App;
