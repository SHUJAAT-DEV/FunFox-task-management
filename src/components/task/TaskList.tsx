/* eslint-disable @typescript-eslint/no-explicit-any */
import TaskItem from './Task';
import './taskList.css';
import useTaskStore from '../../zustand/useTaskStore';
import { Task } from '../../types';

const TaskList = () => {

  const {
    toggleTask,deleteTask,reorderTasks,
    taskConfiguration:{tasks}
}=  useTaskStore();

  const handleDragStart = (e:any, taskId:string) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  const handleDrop = (e:any, targetTaskId:any) => {
    e.preventDefault();
    const sourceTaskId:any= e.dataTransfer.getData('text/plain');
    const newTasks = tasks.slice();
    const sourceTaskIndex = tasks.findIndex((task:Task) => task.id === sourceTaskId);
    const targetTaskIndex = tasks.findIndex((task:Task) => task.id === targetTaskId);
    const [draggedTask] = newTasks.splice(sourceTaskIndex, 1);
    newTasks.splice(targetTaskIndex, 0, draggedTask);
    reorderTasks(newTasks);
  };

  return (
    <div>
    {tasks.map((task:Task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}

    </div>
  );
};

export default TaskList;
