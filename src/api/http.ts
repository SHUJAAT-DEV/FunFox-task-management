/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Task } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const userId:number= Number.parseInt(import.meta.env.VITE_DB_USER);


export const useApi = {
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      const allTasks = response.data;
       console.log('sdfasdfsadf', userId);
         // Filter tasks based on the provided userId
         const filteredTasks = allTasks.filter((task:any) => task.userId === userId);
         console.log('API_BASE_URL',filteredTasks ,allTasks);
         return filteredTasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  addTask: async (task:Task) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  updateTask: async (taskId:string, updates:any) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/tasks/${taskId}`, updates);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  deleteTask: async (taskId:string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

