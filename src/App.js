import { Route, Routes} from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import BranchPage from "./Pages/BranchPage";
import './App.css'
import React from 'react'
const App = () =>{
  return (
    <>
        <Routes>
          <Route path=""  element={<Home/>}></Route>
          <Route path="/branch/:branch" element={<BranchPage/>}/>
          <Route path="/branch/content" element={<ContentPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </>
  );

}


export default App;
