import React from "react";

export default function Card(props){

    return(
        <>
        <div className="col-lg">
                <div className="card bg-dark border-light d-flex flex-column justify-content-center align-items-center py-4">
            <img className="card-img img-fluid rounded-circle overflow-hidden border border-secondary cardimg" src="https://wallpaperaccess.com/full/1182781.jpg" alt="" />
              <h6 className="card-title fw-semibold pt-3 cardtext">{props.brand}</h6>
              </div>
              </div>
        </>
    )
}