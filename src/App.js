import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Navegations from './components/pure/Navegations';
import HomePage from './pages/HomePage';
import TaskLists from './components/container/TaskLists.jsx'
import LoginForm from './components/pure/forms/LoginForm';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/pure/ProtectedRoute';

function App() {

  const [user, setUser] = useState();
  const Navigate = useNavigate()

  const login = (user) => {
    setUser(user);
    console.log(user);
  }

  const logout = () => {
    setUser(null);
    setInterval(Navigate('/'), 4000)
  }

  return (
    <div className="App">

      <Navegations logout={logout} user={user}/>

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/tasks' element={
          <ProtectedRoute user={user}>
            <TaskLists />
          </ProtectedRoute>
        } />

        <Route path='/login' element={<LoginForm login={login} logout={logout} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;