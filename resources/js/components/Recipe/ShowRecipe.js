import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CommentsRecipe from "./CommentsRecipe";

export default class ShowRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            recipecomment: '',
            recipecomments: [],
            roles: [],
            isEdit: false



        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(e) {
        this.setState({
            recipecomment: e.target.value
        });
    
    }


    handleSubmit(e) {
        
        e.preventDefault();
        axios.post("/recipecomment/" + this.props.match.params.id, {
            recipecomment: this.state.recipecomment
        })
            .then(response => {
                if (response === 401) { console.log('catch') } else {
                    console.log('from handle submit catch:', response);
                }
            
                this.setState({
                    recipecomment: '',
                    recipecomments: [...this.state.recipecomments, response.data]
                });
            });
    }

    delete(id) {
        const isNotId = recipecomment => recipecomment.id !== id;
        const updatedComments = this.state.recipecomments.filter(isNotId);
        this.setState({ recipecomments: updatedComments });
        console.log('id', id)
        axios.delete(`/deleterecipecomments/${id}`);


    }
    editedcomments = (id, value) => {
        console.log('id from up', id)
        let recipecomments = this.state.recipecomments
        let recipecomment = recipecomments[id]
        recipecomment['recipecomment'] = value
        this.setState({
            recipecomments
        })
    }


    componentDidMount() {

        axios.get("/getrecipes/" + this.props.match.params.id)

            .then(res => {
                // console.log('resssss',res.data)
                this.setState({
                    item: res.data,
                    recipecomments: []
                });

            })
            .then(errors => {
                console.log(errors)
            })
        axios.get("/getrecipecomments/" + this.props.match.params.id)
            
            .then(res => {
          
                this.setState({
                    recipecomments: [...res.data[0]],
                    roles: [...res.data[1]],
                });
               

            })
            .then(errors => {
                console.log(errors)
            })

    }



  





    render() {
        console.log('this.props')

     
        return (
            <>


                <div className="site-section" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-content">

                                <p className="mb-5">
                                    
                                    <img width="100%" display='block'
                                        height="400" src={"/storage/" + this.state.item.image} />
                                </p>

                                
                                <h1 className="mb-4">
                                    {this.state.item.title}
                                </h1>


                                
                                <div className="post-meta d-flex mb-5">

                                    <div className="vcard">
                                        <span className="d-block">Author : {this.state.item.author} </span>
                                        <span className="date-read">Date : {this.state.item.created_at}</span>
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                    </div>





                                    
                                </div>




                                
                            </div>


                            <div className="col-12 col-md-4">
                                <div className="fitness-blog-sidebar">


                                    <div className="add-widget mb-100">
                                        <a href="#"><img src={"/img/bg-img/add3.png"} alt="" /></a>
                                    </div>

                                    <div className="latest-blog-posts mb-100">
                                       
                                    
                                     
                                        <div className="single-latest-blog-post">
                                            <div className="post-thumbnail">
                                                <img src={"/img/blog-img/6.png"} alt="" />
                                            </div>
                                            <div className="post-content">

                                                <a href="#" className="post-title">Try our Gym</a>

                                                <div className="post-meta">
                                                    <p>Our <a href="#">Tranieer</a> | in <a href="#">Health</a> | <a href="#">& Strong</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-widget mb-100">
                                        <a href="#"><img src={"/img/bg-img/add4.png"} alt="" /></a>
                                    </div>


                                </div>
                            </div>

                        </div>






                        
                    </div>


                    
                </div>

                <h5>{this.state.item.body}</h5>
            



                <hr />
                <hr />
                
                <div className="pt-5">
                    <div className="section-title">
                        <h2 className="mb-5">Comments</h2>
                    </div>
                    {this.state.recipecomments.length == 0 ? "" : this.state.recipecomments.map(((recipecomment) =>
                        <CommentsRecipe delete={this.delete} roles={this.state.roles} recipecomment={recipecomment} key={recipecomment.id} handleChange={this.handleChange} editedcomments={this.editedcomments} />))}
                
                
                
                </div>





{this.state.roles.length > 0 ?
                        <div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <div className="card">
                                            <div className="card-header">comment</div>
                                            <div className="card-body">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input
                                                            onChange={this.handleChange}
                                                            value={this.state.comment}
                                                            className="form-control"
                                                            rows="5"
                                                            maxLength="255"
                                                            placeholder="Create a new comment"
                                                            required
                                                        />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        add
                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>



                            </div></div> : <div>
                            <h1>
                                Please log in to show comments and add your comments
                    </h1>
                        </div>}

                        

            </>





        );
    }
}
