import React from "react";
import Card from "./Card";

export default function Services(){

    return(
        <>
        <div className="container-fluid bg-dark text-light text-center py-5 servicespg d-flex align-items-center">
            <div className="container col-10 col-md-8">
                <h1 className="display-3 fw-normal">Professional Web Developtment Services</h1>
                <p className="lead pt-2 pt-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis enim, necessitatibus harum facere
                     quia veritatis consequuntur temporibus optio rerum fugit.</p>
                <p className="fw-semibold lead services pb-1 d-inline border-bottom border-light">Services</p>
               <div className="row g-4 pt-4">
                <Card brand="Branding"/>
                <Card brand="Quality"/>
                <Card brand="Design"/>
                <Card brand="Creativity"/>
             </div>
            </div>
          
        </div>
        </>
    )
}