import React from 'react';
import useWebAnimations, { bounceInRight, fadeInUp } from "@wellyshen/use-web-animations";
import Employee from '../Images/Working.gif';
import '../App.css';

function About() {

  const { ref: Animation1 } = useWebAnimations({ ...bounceInRight });
    const { ref:Animation2 } = useWebAnimations({ ...fadeInUp});
  
  return (
    <div>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <h1 className="headingStyle">About Us</h1>
        </div>
        <div className="row mt-2">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row ">
              <div className="col-md-6  col-12 setting1" ref={Animation2}>
                <p className="text-secondary">I'm Muhammad Masood, Insha-Allah<br/> One day will become React developer soon...</p>
              </div>
              <div className="col-md-6 col-12 ">
                <img src={Employee} ref={Animation1}  width={500} height={400} alt="Working Routing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
