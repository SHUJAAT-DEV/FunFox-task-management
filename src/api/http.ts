/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Task } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const useApi = {
    // Assuming the user data is stored in the mock API's "users" array
    // Replace this with the actual login check and API call to get the user's dataß
    login: async(username:string)=>{
      const response = await axios.get(`${API_BASE_URL}/users`);
      const users = response.data;
      const user = users.find((user:any) => user.username === username);
  return user
    },

  getAllTasks: async (userId:number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      const allTasks = response.data;
         // Filter tasks based on the provided userId
         const filteredTasks = allTasks.filter((task:any) => task.userId === userId);
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

