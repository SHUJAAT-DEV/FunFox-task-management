import { Task } from '../types';
import useTaskStore from '../zustand/useTaskStore';
import TaskItem from './Task';


const TaskList = () => {
  const  {taskConfiguration:{tasks},toggleTask,deleteTask} =useTaskStore();
  return (
    <div className="task-list">
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
