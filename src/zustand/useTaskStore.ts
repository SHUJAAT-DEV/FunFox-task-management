/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import taskReducer from "../reducers/taskReducer";

// This is a global store. I have structured it to be common for all the stores and added persistence. 
// All the business logic and async calls will be written in the reducer files for better separation.

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