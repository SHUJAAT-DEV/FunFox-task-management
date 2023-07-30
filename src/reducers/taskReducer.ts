/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "../types";
import { useApi } from '../api/http';

const initialState = {
  tasks: [],
  feedbackMessage: '',
  showFeedback: false,
  userId: 0,
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
      const userId = get().taskConfiguration.userId;
      console.log('useriD', userId);
     const taskList= await useApi.getAllTasks(userId);
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

    updateUserId :(userId:string)=>{
      SET({userId})
    },
    LogOut :()=>{
      SET({userId:0})
    }

  };
};

export default taskReducer;
