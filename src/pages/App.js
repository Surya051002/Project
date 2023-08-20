import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import '../pagecss/App.css'
import { useEffect, useState } from "react";
import Home from "./Home"
export default function App(){
        const [Authentication,setAuthenticaion]=useState(false);
        const [User,setUser]=useState();
        useEffect(()=>{
            if(Authentication==true){

            }

        },[Authentication]);
    return(
    <>
    <div className="App" >
        <center>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
            </Router>
        </center>
    </div>
    </>)
}