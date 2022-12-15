import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props){

    return(
        <>
        <section className="sec1div bg-dark d-flex justify-content-center align-items-center">
            <div className="container-fluid bg-dark text-white py-5">
                <div className="col-sm-10 col-lg-9 mx-auto py-md-5"> 
                <div className="row">
                    <div className="col-md">
                <h1 className="h1 py-2 homeh1">{props.h1}</h1>
                <p className="lead">{props.p} 
<br /><br />
                   {props.p2}</p>
                   <div className="text-center text-md-start">
                   <NavLink to="./services" className="btn btn-light text-dark px-5 py-2 my-2 homebtn">{props.btn}</NavLink></div>
                   </div>
                   <div className="col-md ps-md-5 mt-4 mt-lg-0 homeimgdiv text-sm-center">
                      <img className="img-fluid rounded-4 ms-md-5 ps-md-5 homeimg" src={props.img} alt="" />
                   </div>
                 </div>
            </div>
            </div>
        </section>
        </>
    )
}