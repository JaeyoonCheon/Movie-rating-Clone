import React from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

// react version UP -> Route 태그를 Routes로 감싸고 component를 element로 변경, element에 전달되는 인자를 태그로

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" exact={true} element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/movie-detail" element={<Detail></Detail>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
