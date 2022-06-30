import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [Mode,setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);

    },1500);

  }

  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("dark mode has been enable","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enable","success");
    }
  }
  return (
    <>
    <Navbar title={"MY-App"} Mode={Mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter the text here"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
