import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Components/Home';
import { CreatePost } from './Components/CreatePost';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/CreatePost' element={<CreatePost />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Logout' element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
