import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Comment from "./Comment";


export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            comment: '',
            comments: [],
            roles: [],
            isEdit: false



        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
        // this.edited = this.edited.bind(this);
        this.editedcomments = this.editedcomments.bind(this);
        // this.renderUpdateForm = this.renderUpdateForm.bind(this);

    }

    handleChange(e) {
        this.setState({
            comment: e.target.value
        });
        console.log('onChange', this.state.comment);
    }


    handleSubmit(e) {
        
        e.preventDefault();
        axios.post("/comment/" + this.props.match.params.id, {
            comment: this.state.comment
        })
            .then(response => {
               
                this.setState({
                    comment: '',
                    comments: [...this.state.comments, response.data]
                });
            });
    }

    delete(id) {
        const isNotId = comment => comment.id !== id;

        const updatedComments = this.state.comments.filter(isNotId);
        this.setState({ comments: updatedComments });
        console.log('id', id)

        axios.delete(`/deletecomments/${id}`)
            .then(res => {
                console.log('ress', [res.data])
            });


    }


    editedcomments = (id, value) => {
        console.log('id from up', id)
        let comments = this.state.Comments
        let comment = comments[id]
        comment['comment'] = value
        this.setState({
            comments
        })
    }



    componentDidMount() {

        axios.get("/getposts/" + this.props.match.params.id)

            .then(res => {
                
                this.setState({
                    item: res.data,
                    comments: []
                });

            })
            .then(errors => {
                console.log(errors)
            })
        axios.get("/getcomments/" + this.props.match.params.id)
            .then(res => {
                console.log('comments', res.data)
                
                this.setState({
                    comments: [...res.data[0]],
                    roles: [...res.data[1]],
                });
                

            })
            .then(errors => {
                console.log(errors)
            })

    }






    render() {
       
        { this.state.roles.length > 0 ? console.log('roles:', this.state.roles[0].pivot.user_id) : console.log('no') }
      
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

                                


                                </div>
                                
                            </div>
                        </div>
                    </div>
               
                <h5>{this.state.item.body}</h5>
                </div>







                <hr />
                <hr />
                <div className="pt-5">
                    <div className="section-title">
                        <h2 className="mb-5">Comments</h2>
                    </div>
                    {this.state.comments.length == 0 ? "" : this.state.comments.map(((comment) =>
                        <Comment delete={this.delete} roles={this.state.roles} comment={comment} key={comment.id} handleChange={this.handleChange} editedcomments={this.editedcomments} />))}
                </div>



                <div>
                    
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


                </div>


            </>





        );
    }
}
