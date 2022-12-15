import React from "react";
import Aboutcard from "./Aboutcard";

export default function About(){

    return(
        <>
        <section className="bg-dark pb-5 text-light">
          <div className="container-fluid aboutdiv d-md-flex justify-content-center align-items-center p-3 d-none">
             <h6 className="pe-2 pe-sm-4 lead fw-semibold">ART and Artist</h6>
             <h6 className="pe-2 pe-sm-4 lead fw-semibold">Exibition and Events</h6>
             <h6 className="lead fw-semibold">Plan Your Visit</h6>
          </div>
          <div className="bg-secondary py-0 py-md-3">
             <div className="container-md container-fluid col-md-9 text-center text-dark bg-light py-3 d-flex justify-content-center align-items-center flex-column">
                <div className="col-11 col-md-9">
                <h1 className="display-3 fw-normal py-3">About Us</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate laudantium nam architecto accusamus eum, 
                    sapiente excepturi. Laudantium deserunt eius unde? laudantium nam architecto accusamus eum,</p>
                    </div>
             </div>
          </div>
          <div className="container-fluid">
              <h1 className="text-uppercase py-5 display-4 text-center">Who We Are</h1>
             <div className="container px-5 px-md-0">
              <div className="row">
              <Aboutcard img="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
              name="Web Developers"
              />
              <Aboutcard img="https://bizmo.al/wp-content/uploads/2022/03/Web-Dev-Blog.png"
              name="Web Designers"
              />
              <Aboutcard img="https://miro.medium.com/max/1400/1*chEvq4TZ_v30O9YnO3Gifw.jpeg"
              name="Coders"
              />
              </div>
              <div className="row">
              <Aboutcard img="https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975__340.png"
              name="Programers"
              />
              <Aboutcard img="https://media.istockphoto.com/vectors/flat-young-hacker-programmer-with-laptop-hacks-programms-and-site-vector-id1134588944?k=20&m=1134588944&s=170667a&w=0&h=FYBhII80mGZ5E6AxYgBTOeg7kFfy52rrC-hE0lccpDw="
              name="Data Analysts"
              />
              <Aboutcard img="https://media.istockphoto.com/vectors/vector-illustration-of-a-hacker-man-in-a-dark-hood-sitting-at-a-a-vector-id1310856908?b=1&k=20&m=1310856908&s=612x612&w=0&h=ioG78GMK-2Ib-5ZHPOUxCsWH0--qIDTpdnVFoaboxcA="
              name="Data Engineers"
              />
              </div>
              </div>
          </div>
        </section>
        </>
    )
}