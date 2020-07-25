import React from 'react';
import '../App.css';
import useWebAnimations, { bounceInDown,bounceInUp } from "@wellyshen/use-web-animations";
import Programmer1 from '../Images/programmer.jpg'
import Programmer2 from '../Images/programmer1.jpg'

function Service() {

    const { ref: Animation1 } = useWebAnimations({ ...bounceInDown });
    const { ref: Animation2 } = useWebAnimations({ ...bounceInUp });

    return (
        <div className="">
            <div className="container-fluid">
            <div className="row justify-content-center">
          <h1 className="headingStyle">Specialization</h1>
        </div>
                <div className="row mt-5">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row mt-2" ref={Animation1}>
                            <div class="col-sm-4">
                                <div className="card">
                                    <img src={Programmer1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Android Team</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={Programmer2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">IOS Team</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={Programmer1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mern Team</h5>           
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2" ref={Animation2}>
                        <div className="col-sm-4">
                                <div className="card">
                                    <img src={Programmer2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Mean Team</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div className="card">
                                    <img src={Programmer1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Front-end Developer</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <img src={Programmer2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Back-end Developer</h5>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="row justify-content-center mt-5">
                        <button type="submit" className="btn btn-outline-secondary btnSize">Team</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;


