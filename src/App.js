
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
// we have intall npm install react-router-dom
// thgen we have import react-router-dom
    // import {
    //   BrowserRouter as Router,
    //   Switch,
    //   Route,
    //   Link
    // } from "react-router-dom";
// then use switch to get over the route path
/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */

          // <Switch>
          //         <Route path='/about'>
          //             <About/>
          //         </Route>
          //         <Route path='/'>
          //           <TextForm heading="Enter your text to Analyze here.." mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          //         </Route>
          //       </Switch>
// At the <A></A>and href respectively use <LINK><LINK/> and to


const App = () => {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type) => {
    setAlert({
      msg:message,
      type:type,
  });
  };
  setTimeout(() => {
    setAlert(null)
},1500);
  


  const toggleMode =()=>{
   
    if(mode==='light'){
      console.log(mode);
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert('dark mode enabled','success');
    document.title ='TextEditor- Dark Mode';
    }else{
      console.log(mode);
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled','success');
      document.title ='TextEditor- Light Mode';

    }
  }
 
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      
      {/* <TextForm heading="Enter your text to Analyze here.." mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your text to Analyze here.." mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    {/* </BrowserRouter> */}

    </div>
    {/* </Router> */}
    </>
  )
}

export default App;
