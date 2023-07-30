import { Route, Routes } from 'react-router';
import './app.css'
import Home from './pages/Home';
import Login from './pages/auth/Login';
import PrivateRoutes from './routes/PrivateRoutes';

const App = () => {
  return (

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
           <Route path='/' element={<Home />} />
        </Route>
      </Routes>
  );
};

export default App;
