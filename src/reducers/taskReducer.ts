/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "../types";

const initialState = {
  tasks: [],
  feedbackMessage: '',
  showFeedback: false,
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
      SET({ tasks: [...tasks, { ...newTask, id: `${tasks.length + Math.random()}` }] });

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
