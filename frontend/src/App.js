import Branch from "./Component/Branch/Branch";
import SubDetail from "./Data/Sujectdetails";
import {navItems , BranchSubmenu}  from "./Data/Menu";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import ContentPage from "./Pages/ContentPage";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import './App.css'

const App = () =>{
  return (
    <div className="App">
        {/* <Home/> */}
        <SignUp/>
        {/* <Navbar menu={navItems} submenu={BranchSubmenu} /> */}
        <Routes>
          <Route path="/" exact component={Branch}></Route>
        </Routes>
          
     
       {/* <Branch subData = {SubDetail}/>  */}
    </div>
  );

}


export default App;
