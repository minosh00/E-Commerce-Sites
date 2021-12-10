import { Component, useState , useEffect } from 'react';
import Home from './components/homepage/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Homeimprovement from './components/homepage/Homeimprovement'
import Watches from './components/homepage/Watches'
import Apparel from './components/homepage/Apparel'
import Buy from "./components/homepage/buy"

import axios from "axios";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';



function App() {



 


  const [ user, setLoginUser] = useState({})

  const [Hposts, setHPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Homeimprovement")
      .then((res) => setHPosts(res.data))
      .catch((error) => console.log(error));
  });





  const [Wposts, setWPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Watches")
      .then((res) => setWPosts(res.data))
      .catch((error) => console.log(error));
  });



  const [Aposts, setAPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Apparel")
      .then((res) => setAPosts(res.data))
      .catch((error) => console.log(error));
  });


 





  return (
       <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route  path="/Homeimprovement"  render={()=> <Homeimprovement Hposts={Hposts} />} > 
          </Route>
          <Route  path="/Watches"  render={()=> <Watches Wposts={Wposts} />} >
          </Route>
          <Route  path="/Apparel"  render={()=> <Apparel Aposts={Aposts} />} >
          </Route>

          <Route path="/buy">
            <Buy/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
