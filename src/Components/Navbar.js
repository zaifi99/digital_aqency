import React from "react";
import "./style.css"
import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <>
        <div className="container-fluid bg-dark">
        <div className="row">
            <div className="col-11 mx-auto">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                 <a href="" className="navbar-brand navbrand fw-semibold">-Crypto-</a>
                 <button className="navbar-toggler" type="button">
                     <span className="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#tgl"></span>
                 </button> 
                 <div className="collapse navbar-collapse text-center" id="tgl">
                     <ul className="navbar-nav ms-auto fw-normal navul gap-1">
                        <li className="nav-item"> 
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item"> 
                        <NavLink className="nav-link" to="/contact">Contact</NavLink> 
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink> 
                        </li>
                     </ul>
                 </div>
            </div>
        </nav>
        </div>
        </div>
        </div>
        </>
    )
}