import React from 'react';
import '../App.css';
// import Communication from '../Images/Communication.gif';

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <h1 className="headingStyle">Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row ">
              <div className="col-md-8 col-12 mx-auto  mt-3">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email Address</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your e-mail address" />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-secondary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
