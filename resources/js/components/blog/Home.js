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
                    <video autoPlay muted style={{maxWidth: "100%" }} >
                        <source src="https://cdn2.hubspot.net/hubfs/630004/SH_MAIN_1080.mp4" type="video/mp4" />
                    </video>
                </div>

<div className="card-header "style={{fontFamily:' Amaranth',fontSize:"20px",color:"white",backgroundColor:"green"}}>
  
 
  Why Health and development?
  </div>
 
 <h1 className="blockquote-footer" style={{fontFamily:' Amaranth',fontSize:"20px",padding:"20px"}}>
 Many factors influence health status and a country's ability to provide quality health services for its people. Ministries of health are important actors, but so are other government departments, donor organizations, civil society groups and communities themselves. For example: investments in roads can improve access to health services; inflation targets can constrain health spending; and civil service reform can create opportunities - or limits - to hiring more health workers.
 </h1>
 
 
 
 
 
 <div className="card-header "style={{padding:"20px",backgroundColor:"green"}}>
 </div>
 <div className="container"style={{margin:"20px"}}>
   <div className="row" style={{margin:"5px"}}> 
   <div className="col-6">
       <div className="card " style={{padding:"3px"}}>
   <div className="card-header ">
    
   </div>
   <div className="card-body col">
     <blockquote className="blockquote mb-0">
       <p style={{fontFamily:' Amaranth',fontSize:"18px"}}>"Sporting, fitness and healthy living are essential 
 as they are part of modern personality development. 
 </p>
       <footer className="blockquote-footer">Christian Kunert</footer>
     </blockquote>
   </div>
 </div>
 </div>
 <div className="col-6">
 <div className="card "style={{padding:"3px"}}>
   <div className="card-header ">
    
   </div>
   <div className="card-body col">
     <blockquote className="blockquote mb-0">
       <p style={{fontFamily:' Amaranth',fontSize:"18px"}}>
 MY RECOMMENDATION:
 "During their holidays your guests have time to care for their body, soul and mind.
 </p>
 
    </blockquote>
  </div>
</div>
</div>
</div>
</div>


            </>



        );
    }
}
