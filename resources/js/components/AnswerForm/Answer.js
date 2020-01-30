import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export default class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionitem: '',
            answer: '',
            answers: []



        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log([e.target.name], e.target.value);
    }


    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        console.log('from handle', this.state.answer)
        const { answer } = this.state
        axios.post("/answer/" + this.props.match.params.id, { answer })
            .then(res => {
                console.log('from handle submit', res);
                this.setState({
                    answer: '',
                    answers:[...this.state.answers,res.data]
                })
            })
            .then(error => {
                console.log(error)
            })
   
    }

    delete(id) {
        const isNotId = answer => answer.id !== id;
        const updatedanswers = this.state.answers.filter(isNotId);
        this.setState({ answers: updatedanswers });
        console.log('id',id)
        axios.delete(`/deleteanswers/${id}`);


    }


    componentDidMount() {

        axios.get("/getquestion/" + this.props.match.params.id)

            .then(res => {
                // console.log('resssss', res.data)
                this.setState({
                    questionitem: res.data,
                   
                });

            })
            .then(errors => {
                console.log(errors)
            })
        axios.get("/getanswers/" + this.props.match.params.id)
            .then(res => {
                console.log('answes from get: ', res.data)
                // console.log('resssss33333',[...res.data])
                this.setState({
                    answers: [...res.data],
                  
                });
                // console.log('state:', this.state.comments[0].name)

            })
            .then(errors => {
                console.log(errors)
            })

    }







    render() {
        //    console.log(this.props)
        console.log('answer', this.state.answer)
        { this.state.questionitem.length == 0 ? console.log('no') : console.log('from return', this.state.questionitem[0].name) }
        console.disableYellowBox = true;
        // if (this.state.comments.length == 0) return <h1>loading..</h1>
        return (
            <>

                
                <div>
                    <h1>{this.state.questionitem.length == 0 ? '' : this.state.questionitem[0].question}</h1>
                    <h3>{this.state.questionitem.length == 0 ? '' : this.state.questionitem[0].name}</h3>


                </div>
                <form onSubmit={this.handleSubmit} >

                    <div className="form-group">
                        <label htmlFor="answer">Answer</label>
                        <input className="form-control" name='answer' onChange={this.handleChange} value={this.state.answer} id="answer" rows="3" required />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Puplish
                    </button>

                </form>


        {this.state.answers.length==0?'no answer':<div>{this.state.answers.map(ans=><div key={ans.id}>
        <h1>{ans.answer}</h1>
        <hr/>
        <button className='btn btn-danger'onClick={() => this.delete(ans.id)}>Delete</button>

        </div>)}</div>}





            </>





        );
    }
}
