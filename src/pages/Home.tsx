
import { useEffect } from 'react';
import useTaskStore from '../zustand/useTaskStore';
import { AiOutlineLogout,  } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { From ,Task, ToastMessage} from '../components';

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
        <From />
        <Task tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        {showFeedback && <ToastMessage message={feedbackMessage} />}
    </div>
    );
}

export default Home;