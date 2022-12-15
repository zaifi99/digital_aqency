import React from "react";
import { NavLink } from "react-router-dom";

export default function Four04(){

    return(
        <>
        <div className="container-fluid bg-dark text-white four04 d-flex align-items-center" >
            <div className="container text-center">
                <h4 className="h4">
                  Looks Like You're lost in Space
                </h4>
                 <h1 className="four04h1">404</h1>
                  <NavLink to="/" className="btn btn-light px-4 py-2 fw-semibold">Go Back</NavLink>
            </div>
        </div>
        </>
    )
}