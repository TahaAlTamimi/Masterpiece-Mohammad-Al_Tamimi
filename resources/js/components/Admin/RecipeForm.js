import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class RecipeForm extends Component {
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

    onSubmit(e) {

        e.preventDefault();

        const { title, prefer, author, body, image } = this.state
        axios.post('/recipeadmin', { title, prefer, author, body, image })
            .then(res => {
                console.log('from handle submit', res);
            })

            .then(error => {
                console.log(error)
            })
            window.location.href='/recipe'

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

  


    render() {
        return (
          
            <div className="container">
              
                <h1>Add Recipe</h1>
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input className="form-control" name='title' autocomplete="off" onChange={this.handleChange} value={this.state.title} id="title" rows="3" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prefer">Prefer</label>
                        <input className="form-control" name='prefer' autocomplete="off" onChange={this.handleChange} value={this.state.prefer} id="prefer" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" name='author' autocomplete="off" onChange={this.handleChange} value={this.state.author} id="author" rows="3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input className="form-control" name='image' type='file' onChange={this.handlePhoto}  id="image" required />
                    </div>




                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea className="form-control" name='body' id="body" onChange={this.handleChange} value={this.state.body} rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Puplish
                  </button>

                </form>
              



            </div>
        );
    }




}