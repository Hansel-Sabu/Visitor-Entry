import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Securityguard from './components/Securityguard';
import AddSecurity from './components/AddSecurity';
import SearchSecurity from './components/SearchSecurity';
import ViewAllSecurity from './components/ViewAllSecurity';
import RemoveSecurity from './components/RemoveSecurity';
import ViewDailyLogs from './components/ViewDailyLogs';
import SearchDailyLogs from './components/SearchDailyLogs';
import ChangePassword from './components/ChangePassword';
import VisitorStatistics from './components/VisitorStatistics';
import AddLog from './components/AddLog';
import ViewLogSecurity from './components/ViewLogSecurity';
import EditLog from './components/EditLog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/a' element = {<Admin/>}/>
      <Route path ='/s' element = {<Securityguard/>}/>
      <Route path ='/addsecurity' element = {<AddSecurity/>}/>
      <Route path ='/searchsecurity' element = {<SearchSecurity/>}/>
      <Route path ='/viewsecurity' element = {<ViewAllSecurity/>}/>
      <Route path ='/removesecurity' element = {<RemoveSecurity/>}/>
      <Route path ='/viewlog' element = {<ViewDailyLogs/>}/>
      <Route path ='/searchlog' element = {<SearchDailyLogs/>}/>
      <Route path ='/changepass' element = {<ChangePassword/>}/>
      <Route path ='/statistics' element = {<VisitorStatistics/>}/>
      <Route path ='/addlog' element = {<AddLog/>}/>
      <Route path ='/viewlogsecurity' element = {<ViewLogSecurity/>}/>
      <Route path ='/editlog' element = {<EditLog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
