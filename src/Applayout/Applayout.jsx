import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../Pages/pg1";
import Navbar from "./Components/NavBar/navbar";
import About from "../Pages/pg2";
import Contact from "../Pages/pg4";
import Products from "../Pages/pg3";

function Applayout(){
    const [data,setData] = useState([]);

    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element = {<Home/>}></Route>
                <Route path="/about" element = {<About data = {data}/>}></Route>
                <Route path="/products" element = {<Products/>}></Route>
                <Route path="/contact" element = {<Contact data = {data} setData={setData}/>}></Route>
            </Routes>
        </Router>
    </>
}

export default Applayout;