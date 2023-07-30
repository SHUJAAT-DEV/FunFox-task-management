
import TaskForm from '../components/form/TaskForm';
import TaskList from '../components/TaskList';
import FeedbackMessage from '../components/feedback/FeedbackMessage';
import { useEffect } from 'react';
import useTaskStore from '../zustand/useTaskStore';
import { AiOutlineLogout,  } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
const {
    toggleTask,deleteTask, loadTask,LogOut,
    taskConfiguration:{feedbackMessage,tasks,showFeedback}
}=  useTaskStore();
useEffect(() => {
  loadTask();
}, []);

function handleLogOut(){
    LogOut() ;
    navigate('/login');
}

return (
    <div className='container'> 
           <span onClick={handleLogOut}><AiOutlineLogout /></span>
            <h1>Task Management App</h1>
            <TaskForm />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
            {showFeedback && <FeedbackMessage message={feedbackMessage} />}
        </div>
    );
}

export default Home;