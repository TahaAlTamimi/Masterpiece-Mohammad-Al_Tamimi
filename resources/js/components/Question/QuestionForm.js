import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            questions: [],
            answer: [],
            roles:''


        };
        // // bind
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.delete = this.delete.bind(this);

    }

    delete(id) {
        const isNotId = q => q.id !== id;
        const updatedquestions = this.state.answer.filter(isNotId);
        this.setState({ answer: updatedquestions });
        console.log('id', updatedquestions)
        axios.delete(`/deletequestions/${id}`);


    }
    // handle change
    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });
        // console.log([e.target.name], e.target.value);
    }

    onSubmit(e) {

        e.preventDefault();

        const { question } = this.state
        axios.post('/userquestion', { question })
            .then(res => {
                // console.log('from handle submit', res);
                // console.log("SUBMIT", res.data)
                this.setState({
                    question: '',
                    questions: res.data,
                    answer: res.data

                })
            })

            .then(error => {
                console.log(error)
            })



    }

    componentDidMount() {
        axios.get('/getquestion')
            .then(res => {
                // console.log('from qqq', res.data[1])
                this.setState({

                    questions:res.data[0],
                    roles:res.data[1]

                })
                // console.log('data question: ', res.data[0].name)
                // console.log('data question: ', res.data[0].question)
            })

            .then(errors => {
                console.log(errors)
            })

        axios.get('/try')
            .then(res => {
                console.log('from answer', res.data[0])
                this.setState({
                    answer: res.data[0],
                    // roles:res.data[1]

                })
            })
            .then(errors => {
                console.log(errors)
            })

    }




    render() {
        console.log('from state roles: ', this.state.roles.id)
        // console.log('from state answers: ', this.state.answer)
        // this.st(ate.answer.length == 0 ? console.log('noooooooo') : console.log('id', this.state.answer[0].question_id)
    //    console.log(this.state.roles.id==this.state.q.user_id ? 'yes':'no') 
     
        return (
            <>
            <div className="container">

                <h1> Add Your Question & Get Answer From Expert </h1>
                <form onSubmit={this.onSubmit} >

                    <div className="form-group">
                        
                        <input className="form-control" name='question' placeholder='add your questions???' onChange={this.handleChange} value={this.state.question} id="question" rows="3" required />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Puplish
                  </button>

                </form>
                <hr />
                <hr />


             

                <div>
                    {this.state.answer.map(q =>

                        <div key={q.id} className="card mb-3">

                           
                            <div >
                               
                                    <div className="card-body">
                                        <h5 className="card-title" >
                                             {q.question} ?
                                        </h5>
                                   
                               
                                <div>{q.answer ? 
                                    
                                        
                                           
                                            <p className="card-text" >

                                                {q.answer.answer}
                                                {/* <hr/>  */}

                                            </p> 
                                           

                                :
                                   
                                        <p className="card-text">no answers</p>
                                 
                                      
                                }</div>
                            

                                

                            </div>
                            {this.state.roles.id==q.user.id?<button className="btn btn-danger" onClick={() => this.delete(q.id)}>Delete </button>:''}
                            {this.state.roles.id==1?<button className="btn btn-danger" onClick={() => this.delete(q.id)}>Delete </button>:''}
                            
                            
                           
                          
                            </div>
                        </div>

                    )
                   
                    }

                </div>




               

            </div>
            </>
        );
    }




}