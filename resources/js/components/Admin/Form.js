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
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)

    }
    // handle change
    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });
        console.log([e.target.name], e.target.value);
        // let files = e.target.files || e.dataTransfer.files;
        // if (!files.length)
        //       return;
        // this.createImage(files[0]);
    }
    // createImage(file) {
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.setState({
    //         image: e.target.result
    //       })
    //     };
    //     reader.readAsDataURL(file);
    //   }
    //   fileUpload(image){
    //     const url = '/postadmin';
    //     const formData = {file: this.state.image}
    //     return  post(url, formData)
    //             .then(response => console.log(response))
    //   }
    handlePhoto = e => {
        // console.log("PHOTO", e.target.value);
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
          
                window.location.href='/blog'
        
        // this.fileUpload(this.state.image);

    }




    render() {
        return (
            <div className="container">
                <Link to='/post'>Bolg</Link>
                <Link to='/youtube'>youtube</Link>
                <Link to='/calculate'>calculate</Link>
                <Link to='/Adminrecipe'>recipe</Link>
                <Link to='/recipe'>recipe user</Link>
                <Link to='/question'>question user</Link>
                <Link to='/AllQuestionExpert'>Expert</Link>
                {/* <a href = "/post">Blog</a> */}
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
                        <input className="form-control" name='image' type='file' onChange={this.handlePhoto} id="image" required />
                    </div>




                    <div className="form-group">
                        <label htmlFor="body">Example textarea</label>
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