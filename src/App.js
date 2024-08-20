import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Auth from './features/Auth/Auth';
import Home from './features/Home/Home';
import { selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {!user ? <Auth /> : <Home />}
    </div>
  );
}

export default App;
