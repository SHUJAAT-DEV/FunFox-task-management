/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "../types";
import { useApi } from '../api/http';


const initialState = {
  tasks: [],
  feedbackMessage: '',
  showFeedback: false,
  userId: import.meta.env.VITE_DB_USER,
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
    loadTask:async()=>{
     const taskList= await useApi.getAllTasks();
     SET({tasks:taskList})
    },
    addTask: async(task:Task) =>{
      const userId:number= Number.parseInt(get().taskConfiguration.userId);
      console.log('taskConfiguration',userId);
      const newTask = await useApi.addTask({...task, userId});
      const tasks = get().taskConfiguration.tasks;
      SET({ tasks: [...tasks, { ...newTask }] });

    } ,
    toggleTask: (taskToToggle:Task) =>{
      const tasks = get().taskConfiguration.tasks;
      SET({
        tasks: tasks.map((task: Task) =>
          task === taskToToggle ? { ...task, completed: !task.completed } : task
        ),
      })
    },
    deleteTask: async(taskToDelete:Task) =>{
      await useApi.deleteTask(taskToDelete.id);
    const tasks = get().taskConfiguration.tasks;
      SET({
        tasks: tasks.filter((task:Task) => task !== taskToDelete),
      })
    },
    showFeedbackMessage: (message:string) => {
      SET({ feedbackMessage: message, showFeedback: true });
      setTimeout(() => {
        SET({ showFeedback: false });
      }, 2000);
    },
    reorderTasks: (newTasks:Task) =>  SET({ tasks: newTasks }),

  };
};

export default taskReducer;
