import React from 'react';
import useWebAnimations, { bounceInDown, fadeInLeft } from "@wellyshen/use-web-animations";
import Communication from '../Images/Meeting.gif';
import '../App.css';

function Home() {

    const { ref: Animation1 } = useWebAnimations({ ...bounceInDown});
    const { ref: Animation2 } = useWebAnimations({ ...fadeInLeft});

    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-6 col-12 setting" ref={Animation2}>
                                <h1 >Software House</h1>
                                <p className="text-secondary">Karachi,Pakistan.</p>
                                <h3 className="text-primary">Make things as simple as possible, <br />but not simpler</h3>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12 mx-auto ">
                                <img src={Communication} ref={Animation1} width={650} height={400} alt="Communication" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;


