import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Securityguard from './components/Securityguard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/a' element = {<Admin/>}/>
      <Route path ='/s' element = {<Securityguard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
