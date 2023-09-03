
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
  <div>  
        <Routes> 
           <Route   path="/" element={<Home/>}/>
           <Route   path="/login" element={<Login/>}/>
           </Routes>
  </div>
  );
}

export default App;
