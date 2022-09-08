import "./App.scss";
import React from "react";
import {Routes, Route} from 'react-router-dom';


import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Message from './components/Message/Message'




function App({data}) {

  console.log(data.profilePage);

  return (
    <div className="wrapper">
      <Header />
      <Aside data={data.aside}/>
      <Routes>
        <Route path="/" element={<Main data={data.profilePage}/>}/>           
        <Route path="/message" element={<Message data={data.messagesPage}/>}/>           
      </Routes>
    </div>
  );
}

export default App;
