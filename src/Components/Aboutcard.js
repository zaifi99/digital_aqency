import React from "react";

export default function Aboutcard(props){

    return(

        <>
           <div className="card col-md p-0 text-dark mx-0 mx-md-4 mb-5">  
                <img className="card-img image" src={props.img} alt="" />
                <div className="card-body">
                <h3 className="card-title text-center">{props.name}</h3>
                <p className="card-text lead pb-3">Adipisicing elit. Quaerat, iusto! ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, iusto!</p>
                </div>
              </div>
        </>
    )
}