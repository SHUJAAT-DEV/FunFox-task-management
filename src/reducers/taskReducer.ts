/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "../types";

const initialState = {
  tasks: [],
};

const taskReducer = (set: any, get: any) => {
  const SET = (setData: any) => {
    set((state: any) => ({
      ...state,
      taskConfiguration: {
        ...get().taskConfiguration, ...setData,
      },
    }));
  };
  return {
    taskConfiguration: { ...initialState },
    addTask: (newTask:Task) =>{
      const tasks = get().taskConfiguration.tasks;
      SET({ tasks: [...tasks, { ...newTask, id: tasks.length + 1 }] });

    } ,
    toggleTask: (taskToToggle:Task) =>{
      const tasks = get().taskConfiguration.tasks;
      SET({
        tasks: tasks.map((task: Task) =>
          task === taskToToggle ? { ...task, completed: !task.completed } : task
        ),
      })
    },
    deleteTask: (taskToDelete:Task) =>{
    const tasks = get().taskConfiguration.tasks;
      SET({
        tasks: tasks.filter((task:Task) => task !== taskToDelete),
      })
    },
  };
};

export default taskReducer;
