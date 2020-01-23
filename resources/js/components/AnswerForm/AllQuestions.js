import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class AllQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            questions:[],


        };
      

    }

   
      
 

    
           


    componentDidMount(){
        axios.get('/getquestion')
        .then(res=>{
                this.setState({

                    questions:[...res.data[0]]

                })
            console.log('data question1: ',res.data[0])
            console.log('data question: ',res.data[0].question)
        }
        )
        .then(errors => {
            console.log(errors)
        })
    }




    render() {
        console.log('from state: ',this.state.questions)
        return (
            <div className="container">


                <h1>all questions</h1>
                {this.state.questions.map((question,i) => { return <Link to={"question/"+question.id} key={question.id}><h1>{question.question} {question.id}</h1> <hr/></Link> })}
                    {/* {this.state.blogs.map(blog => <h1>hi</h1>)} */}
               
             
              

{/* 
                {this.state.questions.length == 0 ? "there is no question" :this.state.questions.map((question)=><div key={question.id}> <h2>{question.question}</h2><hr/> </div>)}  */}

            </div>
        );
    }



}