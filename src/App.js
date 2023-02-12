import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:000');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;