import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Components/Home';
import { CreatePost } from './Components/CreatePost';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { Navbar } from './Components/Navbar';

function App() {
  const[isAuth, setAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/CreatePost' element={<CreatePost />}></Route>
        <Route path='/Login' element={<Login setAuth={setAuth}/>}></Route>
        <Route path='/Logout' element={<Logout setAuth={setAuth}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
