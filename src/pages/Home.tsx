
import { useEffect } from 'react';
import useTaskStore from '../zustand/useTaskStore';
import { useNavigate } from 'react-router-dom';
import { From ,Task, ToastMessage} from '../components';
import PageLayout from '../components/layouts/PageLayout';

function Home() {
    const navigate = useNavigate();
const {
    loadTask,LogOut,
    taskConfiguration:{feedbackMessage,showFeedback}
}=  useTaskStore();

useEffect(() => {
  loadTask();
}, []);

function handleLogOut(){
    LogOut() ;
    navigate('/login');
}

return (
    <PageLayout 
      handleLogOut={handleLogOut}
      title='Task Management App'
    >
        <From />
        <Task />
        {showFeedback && <ToastMessage message={feedbackMessage} />}
     </PageLayout>
    );
}

export default Home;