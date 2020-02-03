import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



export default class EidtAdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: '',
            prefer: '',
            author: '',
            body: '',
            image: ''




        };


    }

    handleChange = (e) => {


        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
    }
    handlePhoto = e => {
        
        let files = e.target.files || e.dataTransfer.files;
        console.log("file", files);
        if (!files.length) return;
        this.createImage(files[0]);
    };
    createImage(file) {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
        console.log("Photo", this.state.image);
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { title, prefer, author, body, image } = this.state
        axios.put('/editpost/' + this.props.match.params.id, { title, prefer, author, body, image })
          

            .then(error => {
                console.log(error)
            })

           
                
                window.location.href='/blogAdmin'
            
           
  

    }

  






    componentDidMount() {

        axios.get("/getposts/" + this.props.match.params.id)

            .then(res => {
                
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    prefer: res.data.prefer,
                    author: res.data.author,
                    body: res.data.body,
                    image: res.data.image,
                });

            })
            .then(errors => {
                console.log(errors)
            })

            .then(errors => {
                console.log(errors)
            })

    }






    render() {
       
        return (
            <>
                <h1>Article Edit</h1>


                <form onSubmit={this.onSubmit} encType='multipart/form-data'>

                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input className="form-control" name='title' onChange={this.handleChange} value={this.state.title} id="title" rows="3" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prefer">prefer</label>
                        <input className="form-control" name='prefer' onChange={this.handleChange} value={this.state.prefer} id="prefer" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">author</label>
                        <input className="form-control" name='author' onChange={this.handleChange} value={this.state.author} id="author" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">image</label>
                        <input className="form-control" name='image' type='file' onChange={this.handlePhoto}  id="image" />
                    </div>




                    <div className="form-group">
                        <label htmlFor="body">Example textarea</label>
                        <textarea className="form-control" name='body' id="body" onChange={this.handleChange} value={this.state.body} rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Edit
                    </button>
                    <Link className="btn btn" type="submit" to={'/blogAdmin'}>Back </Link>
                </form>
   





                <hr />
                <hr />




                <div>



                </div>


            </>





        );
    }
}
