import { Route, Routes} from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import BranchPage from "./Pages/BranchPage";
import Subject from "./Pages/Subject";
import './App.css'
import React from 'react'
const App = () =>{
  return (
    <>
        <Routes>
          <Route exact path=""  element={<Home/>}></Route>
          <Route exact path="/:branch" element={<BranchPage/>}/>
          <Route path="/branch/content" element={<ContentPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route exact path="/:branch/:sem/:subject" element={<Subject/>}/>
        </Routes>
    </>
  );

}


export default App;
