import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class About extends Component {




    render() {
        return (
            <>
                <div className="about-us--area section-padding-100">
                    <div className="container">
                        <div className="row">


                            <div className="col-12 col-lg-7">
                                <div className="section-heading">
                                    <h6>H&S</h6>
                                    <h2>Why choose H&S?</h2>
                                </div>
                                <div className="about-text">
                                    <p>H&S delivers relevant information in clear,
                                            jargon-free language that puts health into context in peoples' lives.
                                            Through medical content, insights from experts and real people,
                                            and breaking news, we answer: how it happened, what it feels like,
                                            what you can do about it, and why it matters.

                                    Health.com is produced by editors and journalists dedicated to delivering accurate,
                                    trusted, up-to-date health and medical information, for consumers.
                                    We focus on problem-solving content to help you make decisions during complicated,
                                    stressful times. We write in plain English, using real-life examples.
                                    For additional information we partner with the medically accredited sources listed below.</p>
                                 
                               
                               
                               
                                </div>
                            </div>




                       


                            <div className="col-12 col-lg-5">
                                <div className="about--thumb">
                                    <img src="img/bg-img/bg-12.jpg" alt="" />
                                </div>


                                
                            </div>
                            <div className="col-12 col-lg-7">
                                <div className="section-heading">
                                  
                                    <h2> Accuracy and Review of Content</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                    Accuracy and Review of Content
                                       by doctors, experts, 
                                        patients, and advocates have been interviewed during the 
                                        production of our original content.

                                        Read our User's Bill of Rights and Editorial Policy to learn more about 
                                        our commitment to editorial integrity and 
                                        service to our users.

                                        About Your Privacy
                                        We know that health is a very personal, private subject, 
                                        and we maintain a strict privacy policy.
                               
                                        </p>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <section className="teachers-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h6>H&S Team</h6>
                                    <h2>Meet the instructors</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">


                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-teachers-area mb-100">

                                    <div className="teachers-bg-gradients"></div>

                                    <div className="teachers-thumbnail">
                                        <img src="/storage/taha.jpeg" alt="" />
                                    </div>

                                    <div className="teachers-info">
                                        <h6>Mohammad Al-Tamimi</h6>
                                        <span>Content SuperVisor</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-teachers-area mb-100">

                                    <div className="teachers-bg-gradients"></div>

                                    <div className="teachers-thumbnail">
                                        <img src="img/team-img/t2.png" alt="" />
                                    </div>

                                    <div className="teachers-info">
                                        <h6>Mick Hamilton</h6>
                                        <span>Doctor</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-teachers-area mb-100">

                                    <div className="teachers-bg-gradients"></div>

                                    <div className="teachers-thumbnail">
                                        <img src="img/team-img/t3.png" alt="" />
                                    </div>

                                    <div className="teachers-info">
                                        <h6>Criss James</h6>
                                        <span>Fitness trainer</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-teachers-area mb-100">

                                    <div className="teachers-bg-gradients"></div>

                                    <div className="teachers-thumbnail">
                                        <img src="img/team-img/t4.png" alt="" />
                                    </div>

                                    <div className="teachers-info">
                                        <h6>Jack Black</h6>
                                        <span>Expert Health</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



            </>
        )
    }




}