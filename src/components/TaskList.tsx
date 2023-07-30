/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Task from './task/Task';
import './taskList.css';
import useTaskStore from '../zustand/useTaskStore';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  const {reorderTasks}=  useTaskStore();

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
    const sourceTaskIndex = tasks.findIndex((task) => task.id === sourceTaskId);
    const targetTaskIndex = tasks.findIndex((task) => task.id === targetTaskId);
    const [draggedTask] = newTasks.splice(sourceTaskIndex, 1);
    newTasks.splice(targetTaskIndex, 0, draggedTask);
    reorderTasks(newTasks);
  };

  return (
    <div>
    {tasks.map((task) => (
            <Task
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
