/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "../../types";
import './task.css'
import { AiFillDelete,  } from "react-icons/ai";
// import { TiInputCheckedOutline,TiInputChecked } from "react-icons/ti";
import React from 'react';
import './Task.css';

interface TaskProps {
  task: Task;
  toggleTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  onDragStart:(event:any , taskId:string) =>void,
   onDragOver:(event:any) =>void,
    onDrop:(event:any , taskId:string) =>void,
}

const Task: React.FC<TaskProps> = ({ task, toggleTask, deleteTask ,onDragStart, onDragOver, onDrop}) => {
  const { id, title, description, completed } = task; // Ensure task properties are correctly destructured

  return (
    <div 
    draggable
    onDragStart={(e) => onDragStart(e, task.id)}
    onDragOver={(e) => onDragOver(e)}
    onDrop={(e) => onDrop(e, task.id)}
    className="task" key={id}>
      <div className="task-detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="task-action">
      <button onClick={() => toggleTask(task)}>
        {completed ? 'Incomplete' : 'Completed'}
      </button>
      <span onClick={() => deleteTask(task)}><AiFillDelete size={'2em'} color='red'/></span>
      </div>
    
    </div>
  );
};

export default Task;
