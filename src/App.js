import logo from './logo.svg';
import './App.css';
import Home from './components/Homepage/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Verification from './components/verify/Verification';
import PrivateRoute from './PrivateRoute';
import Profile from './components/verify/Profile';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Error from './components/error/Error';
import ErrorBoundary from './components/error/ErrorBoundary';
import Faq from './components/Footer/Faq';
import Copyright from './components/Footer/Copyright';
import Privacy from './components/Footer/Privacy';
import Hyperlinking from './components/Footer/Hyperlinking';
import Terms from './components/Footer/Terms';
import PrivateLogin from './PrivateLogin';


function App() {
  const success=localStorage.getItem("success");
  const data=useSelector((state)=>state.verify.PassportData)
  return (
    
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route element={<PrivateLogin/>}>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
              <Route exact path='/verification' element={<Verification/>}/>
              <Route exact path='/profile' element={<Profile/>}/>
          </Route>
          <Route exact path='/error' element={<Error/>}/>
          <Route exact path='/faq' element={<Faq/>}/>
          <Route exact path='/copyright' element={<Copyright/>}/>
          <Route exact path='/privacy' element={<Privacy/>}/>
          <Route exact path='/hyperlinking' element={<Hyperlinking/>}/>
          <Route exact path='/terms' element={<Terms/>}/>
        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
