import React, { Component } from 'react'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }





  render() {


    return (
      <>


        <div className="card-body">
          <video autoPlay muted style={{ maxWidth: "100%" }} >
            <source src="https://cdn2.hubspot.net/hubfs/630004/SH_MAIN_1080.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="card-header " style={{ fontFamily: ' Amaranth', fontSize: "20px", color: "white", backgroundColor: "green" }}>


          Why Health and development?22525252525yuo yup
  </div>

        <h1 className="blockquote-footer" style={{ fontFamily: ' Amaranth', fontSize: "20px", padding: "20px" }}>
          Many factors influence health status and a country's ability to provide quality health services for its people. Ministries of health are important actors, but so are other government departments, donor organizations, civil society groups and communities themselves. For example: investments in roads can improve access to health services; inflation targets can constrain health spending; and civil service reform can create opportunities - or limits - to hiring more health workers.
 </h1>





        <div className="card-header " style={{ padding: "20px", backgroundColor: "green" }}>
        </div>


        <hr />

        <div>

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">

                  <h5 className="card-title">"Sporting, fitness and healthy living are essential
 as they are part of modern personality development.</h5>

                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">

                  <h5 className="card-title">MY RECOMMENDATION:
                <br/>
 "During their holidays your guests have time to care for their body, soul and mind."</h5>

                </div>
              </div>
            </div>
          </div>
        </div>



      </>



    );
  }
}
