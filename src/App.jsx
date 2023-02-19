import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Admin } from "./Admin";
import ChatBox from "./ChatBox";
import Train from "./Train";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Train />}></Route>
          <Route path="/train" element={<Train />}></Route>
          <Route path="/chat" element={<ChatBox />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
