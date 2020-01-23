import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Popup from "reactjs-popup";
// import Modal from './Modal';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            tall: '',
            gender: '',
            exercise: '',
            age: '',
            result: '',
            show: false


        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }



    handleChange(e) {

        this.setState({


            [e.target.name]: e.target.value



        });
        console.log([e.target.name], e.target.value);

    }

    onSubmit(e) {

        e.preventDefault();

        // const { weight } = this.state
        console.log('from submit', ((this.state.weight) / ((this.state.tall / 100) ** 2)))


    }





    render() {

        return (
            <>

                {/* <h1>calculate </h1> */}
                <div className="imgcontainer" >
                    <img src="https://epsi.eu/wp-content/uploads/2019/04/euhealth.png" width="100%" style={{ height: ' 400px' }} />
                </div>
                <div className="d-flex flex-column align-items-center" style={{ marginTop: '12px' }} >
                    <h3>How Ideal Weight Is Calculated</h3>
                </div>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group" name='weight'>
                        <label htmlFor="weight">weight</label>
                        <input className="form-control" name='weight' min="1" type='number' onChange={this.handleChange} value={this.state.weight} id="weight" rows="3" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tall">tall</label>
                        <input className="form-control" name='tall' min="1" type='number' onChange={this.handleChange} value={this.state.tall} id="tall" rows="3" required />
                    </div>
                    <div className="form-group" name='age'>
                        <label htmlFor="age">Age</label>
                        <input className="form-control" name='age' min="1" type='number' onChange={this.handleChange} value={this.state.age} id="weight" rows="3" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exercise">amount of exercise</label>
                        <select className="form-control" name='exercise' id="exercise" onChange={this.handleChange}>
                            <option  >choose..</option>
                            <option value={1} >No exercise</option>
                            <option value={2}>1-3 days/week</option>
                            <option value={3}>3-5 days/week</option>
                            <option value={4}> Most Days</option>
                            <option value={5}>Every Days</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" name='gender' id="gender" onChange={this.handleChange}>
                            <option >choose..</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>

                        </select>
                    </div>

                    {/* <button>hello</button> */}

                </form>





                <div>


                    <Popup modal trigger={<button className='btn btn-success'> Calculate</button>} position="right center">



                        {/* body type */}

                        <div>

                            {((this.state.weight) / ((this.state.tall / 100) ** 2)) <= 18.5 &&
                                <div>
                                    <h1>Body type: Sikiny</h1>
                                </div>



                            }

                        </div>

                        <div>

                            {(this.state.weight) / ((this.state.tall / 100) ** 2) > 18.5 && (this.state.weight) / ((this.state.tall / 100) ** 2) <= 25 &&
                                <div>
                                    <h1>Body type: Ideal</h1>
                                </div>



                            }

                        </div>



                        <div>

                            {(this.state.weight) / ((this.state.tall / 100) ** 2) > 25 && (this.state.weight) / ((this.state.tall / 100) ** 2) <= 30 &&
                                <div>
                                    <h1>Body type: fat</h1>
                                </div>



                            }

                        </div>


                        <div>

                            {(this.state.weight) / ((this.state.tall / 100) ** 2) > 30 && (this.state.weight) / ((this.state.tall / 100) ** 2) <= 35 &&
                                <div>
                                    <h1>Body type: over weight</h1>
                                </div>



                            }

                        </div>


                        <div>

                            {(this.state.weight) / ((this.state.tall / 100) ** 2) > 35 &&
                                <div>
                                    <h1>Body type: error</h1>
                                </div>



                            }

                        </div>












                        {/* body type */}
                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 1 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) + 5).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>


                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 2 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) + 5) * 1.375).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>

                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 3 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) + 5) * 1.55).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>
                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 4 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) + 5) * 1.725).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>
                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 5 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) + 5) * 1.725).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>









                        {/* women */}


                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 2 && this.state.exercise == 1 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) - 161).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>


                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 2 && this.state.exercise == 2 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) - 161) * 1.375).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>

                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 2 && this.state.exercise == 3 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) - 161) * 1.55).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>
                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 2 && this.state.exercise == 4 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) - 161) * 1.725).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>
                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 1 && this.state.exercise == 5 && this.state.age > 0 &&
                                <div>
                                    <h1>weight:{(((this.state.weight * 10) + (6.25 * this.state.tall) - (5 * this.state.age) - 161) * 1.725).toFixed(2)} calories/day</h1>
                                </div>



                            }

                        </div>







































                        <div>

                            {this.state.weight == 0 && this.state.tall == 0 && this.state.gender == 0 && this.state.exercise == 0 &&
                                <div>
                                    <h1>please fill the input</h1>
                                </div>


                            }</div>

                        <div>

                            {this.state.weight > 0 && this.state.tall == 0 && this.state.gender == 0 && this.state.exercise == 0 &&
                                <div>
                                    <h1>please fill the input1</h1>
                                </div>


                            }</div>

                        <div>

                            {this.state.weight > 0 && this.state.tall > 0 && this.state.gender == 0 && this.state.exercise == 0 &&
                                <div>
                                    <h1>please fill the input2</h1>
                                </div>


                            }</div>


                    </Popup>

                </div>

            </>



        );
    }
}
