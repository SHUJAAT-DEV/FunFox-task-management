/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import taskReducer from "../reducers/taskReducer";


const useTaskStore = create<any>(
  persist(
    devtools((set: any, get: any) => ({
      ...taskReducer(set,get)
    })),
    {
      name: 'taskStore',
    },
  ),
);

  export default useTaskStore;