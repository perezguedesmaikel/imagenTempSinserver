import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import View from "./pages/view";

function App() {
  return (
    <div className="App">
          <h1>Esta es una APK con Context</h1>
        <Routes>
            <Route path={'/view/:bookid'} element={<View/>}/>
            <Route path={'/create'} element={<Create/>}/>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
