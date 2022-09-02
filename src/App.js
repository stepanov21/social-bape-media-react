import "./App.scss";
import React from "react";
import {Routes, Route} from 'react-router-dom';


import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Message from './components/Message/Message'




function App() {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Routes>
        <Route path="/profile" element={<Main />}/>           
        <Route path="/message" element={<Message />}/>           
      </Routes>
    </div>
  );
}

export default App;
