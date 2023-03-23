import './App.css';
import About from './componenets/About';
import Home from './componenets/Home';
import Navbar from './componenets/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, {useState} from 'react';
import Notestate from './Context/notes/NoteState'
import Alert from './componenets/Alert';
import Login from './componenets/Login';
import Signup from './componenets/SignUp';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  return (
    <>
    <Notestate>
    <Router>
    <Navbar/>
    <Alert Alert={alert}/>
    <div className="container">
        <Routes>
          <Route path="/" element= {<Home showAlert= {showAlert}/>}></Route>
          <Route path="/about" element= {<About showAlert= {showAlert}/>}></Route>
          <Route path='/login' element= {<Login showAlert= {showAlert}/>}></Route>
          <Route path='/signup' element= {<Signup showAlert= {showAlert}/>}></Route>
          </Routes>
          </div>
    </Router>
    </Notestate>    
  </>
  );
}

export default App;
