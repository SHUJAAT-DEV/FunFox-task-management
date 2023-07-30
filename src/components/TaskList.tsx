import { Task } from '../types';
import TaskItem from './Task';

type TaskProperties ={
    tasks:Task[],
     toggleTask:(task:Task)=>void, 
     deleteTask:(task:Task)=>void
}

const TaskList = ({ tasks, toggleTask, deleteTask }:TaskProperties) => {
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
