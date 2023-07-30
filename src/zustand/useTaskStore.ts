import { create } from "zustand";
import { Task } from "../types";

type TaskStore = {
    tasks: Task[];
    addTask: (newTask: Task) => void;
    toggleTask: (taskToToggle: Task) => void;
    deleteTask: (taskToDelete: Task) => void;
  };
  
const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, { ...newTask, id: state.tasks.length + 1 }] })),
    toggleTask: (taskToToggle) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task === taskToToggle ? { ...task, completed: !task.completed } : task
        ),
      })),
    deleteTask: (taskToDelete) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task !== taskToDelete),
      })),
  }));

  export default useTaskStore;