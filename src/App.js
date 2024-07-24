import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  let name = "Akshay";
  const [mode,setMode]=useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#072d4f';
      showAlert('info','Darkmode Enabled.')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('info','Darkmode Disabled.')
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
          
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
