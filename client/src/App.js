import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';

import {initialState, reducer} from "./reducer/UseReducer";

export const userContext = createContext();

const Routing = () => {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/about" element={<About />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route path="*" element={<Errorpage />} />

      <Route exact path="/logout" element={<Logout />} />

    </Routes>

  )
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <userContext.Provider value={{ state, dispatch }}>

        <Navbar />

        <Routing />

      </userContext.Provider>

    </>
  );
}

export default App;
