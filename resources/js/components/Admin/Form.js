import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            prefer: '',
            author: '',
            body: '',
            image: ''

        };
       
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
     

    }
   
    handleChange(e) {

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

    onSubmit(e) {

        e.preventDefault();

        const { title, prefer, author, body, image } = this.state
        axios.post('/postadmin', { title, prefer, author, body, image })
            .then(res => {
                console.log('from handle submit', res);
                this.setState({
                    title: '',
                    prefer: '',
                    author: '',
                    body: '',
                    image: ''
                });
            })

            .then(error => {
                console.log(error)
            })
          
              
        
       

    }




    render() {
        return (
            <div className="container">
               
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" name='title' onChange={this.handleChange} value={this.state.title} id="title" rows="3" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prefer">Prefer</label>
                        <input className="form-control" name='prefer' onChange={this.handleChange} value={this.state.prefer} id="prefer" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" name='author' onChange={this.handleChange} value={this.state.author} id="author" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input className="form-control" name='image' type='file' onChange={this.handlePhoto} id="image" required />
                    </div>




                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea className="form-control" name='body' id="body" onChange={this.handleChange} value={this.state.body} rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Puplish23
                  </button>

                </form>




            </div>
        );
    }




}