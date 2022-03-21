import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {

        const resolvedClass = {
            textDecoration : 'line-through'
        }
    return (
        <div className="todo-item">
           <div className="descriptio-wrapper">
                  <p style={props.completed === true ? resolvedClass : {}}>
                {props.description}
                </p>
               </div>
               <div className="input-wrapper">
                   <input 
                   type="checkbox" 
                   defaultChecked={props.completed}
                   onChange={props.handleChange}
                   />
               </div>
        </div>
    )
}

export default ToDoItem;