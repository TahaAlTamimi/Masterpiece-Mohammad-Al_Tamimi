import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class AllQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {

            questions: [],


        };


    }









    componentDidMount() {
        axios.get('/getquestion')
            .then(res => {
                this.setState({

                    questions: [...res.data[0]]

                })
                console.log('data question1: ', res.data[0])
                console.log('data question: ', res.data[0].question)
            }
            )
            .then(errors => {
                console.log(errors)
            })
    }




    render() {
        console.log('from state: ', this.state.questions)
        return (
            <div className="container">


                <h1>all questions</h1>
                {this.state.questions.map((question, i) => {
                    return (

                        <div className="card mb-3">
                            <Link to={"question/" + question.id} key={question.id}>
                                <p className="card-text" >
Question no. 
                                    {question.id}
                                </p>
                                <div >

                                    <div className="card-body">
                                        <h5 className="card-title" >

                                            {question.question}
                                        </h5>
                                    </div>
                                </div>

                                <hr /></Link>

                        </div>)
                })}





            </div>
        );
    }



}