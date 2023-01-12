import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home';
import Usertask from './components/Usertask';


function App() {
  return (
    <Router>
    <div className="App">
     <> 
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Signup" element={ <Signup/> } />
      <Route path="/Signin" element={ <Login/> } />
      <Route path="/Taskuser" element={ <Usertask/> } />

     </Routes>
     
      
      
    </>
    </div>
    </Router>
  );
}

export default App;
