import { Task } from "../types";

type TaskProperties ={
    task:Task,
     toggleTask:(task:Task)=>void, 
     deleteTask:(task:Task)=>void
}

const Task = ({ task, toggleTask, deleteTask }:TaskProperties) => {
  const { title, description, completed } = task;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => toggleTask(task)}>
        {completed ? 'Incomplete' : 'Completed'}
      </button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default Task;
