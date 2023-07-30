import { Task } from "../types";
import './task.css'
import { AiFillDelete,  } from "react-icons/ai";
import { TiInputCheckedOutline,TiInputChecked } from "react-icons/ti";



type TaskProperties ={
    task:Task,
     toggleTask:(task:Task)=>void, 
     deleteTask:(task:Task)=>void
}

const Task = ({ task, toggleTask, deleteTask }:TaskProperties) => {
  const { title, description, completed } = task;

  return (
    <div className="task_container">
      <div className="tast_detail">
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      <div className="tast_action">
        <span onClick={() => toggleTask(task)}>
          {completed ?   <TiInputCheckedOutline size={'2em'}  /> : <TiInputChecked  size={'2em'}/>}
        </span>
    
        <span onClick={() => deleteTask(task)}>  <AiFillDelete size={'2em'} /></span>
      </div>
    </div>
  );
};

export default Task;
