import TaskForm from './components/form/TaskForm';
import TaskList from './components/TaskList';
import './app.css'
import FeedbackMessage from './components/feedback/FeedbackMessage';
import useTaskStore from './zustand/useTaskStore';
import { useEffect } from 'react';

const App = () => {
const {toggleTask,deleteTask, loadTask,taskConfiguration:{feedbackMessage,tasks,showFeedback}}=  useTaskStore();
useEffect(() => {
  loadTask();
}, []);
  return (
    <div className='container'>
      <h1>Task Management App</h1>
      <TaskForm />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      {showFeedback && <FeedbackMessage message={feedbackMessage} />}
    </div>
  );
};

export default App;
