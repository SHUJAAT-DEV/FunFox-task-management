import { useState } from 'react';
import useTaskStore from '../../zustand/useTaskStore';
import { useApi } from '../../api/http';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const {updateUserId}= useTaskStore();
  const navigate = useNavigate();

  const handleLogin =async () => {
   const user=  await useApi.login(username)
    if (user) {
        updateUserId(user.id);
        navigate('/')
    } else {
      alert('User not found. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-contenet'> 
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
        </div> 
     
    </div>
  );
};

export default Login;
