import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Pagination from "react-js-pagination";


export default class RenderBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            search: '',
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3
        };
    }


    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        // this.setState({ activePage: pageNumber });
        axios.get('/getposts?page=' + pageNumber)

            .then(res => {

                this.setState({
                    blogs: res.data.data,
                    itemsCountPerPage: res.data.per_page,
                    totalItemsCount: res.data.total,
                    activePage: res.data.current_page,

                });

            })
    }

    delete(id) {
        console.log('deletform',id)
        const isNotId = blog => blog.id !== id;

        const updatedblogs = this.state.blogs.filter(isNotId);
        this.setState({ blogs: updatedblogs });
        console.log('id', id)

        axios.delete(`/deleteposts/${id}`)
            .then(res => {
                console.log('ress', [res.data])
            });


    }

    componentDidMount() {

        axios.get('/getposts')

            .then(res => {

                this.setState({
                    blogs: res.data.data,
                    itemsCountPerPage: res.data.per_page,
                    totalItemsCount: res.data.total,
                    activePage: res.data.current_page,

                });

            })
            .then(errors => {
                console.log(errors)
            })
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
        console.log(e.target.value)

    }




    render() {
        console.log(this.state.blogs)
        // console.log('search:', this.state.search)
        let filterBlogs = this.state.blogs.filter(
            (blog) => {
                return blog.title.toLowerCase().indexOf(this.state.search) !== -1
            }

        )


        // console.log('filter', filterBlogs.length)
        // console.log('pageRangeDisplayed', this.state.pageRangeDisplayed)
        return (
            <>
            <h1>Admin</h1>
            <div className="search-form d-inline-block">
                <div className="d-flex">
                <input type='text' placeholder='Search...' value={this.state.search} onChange={this.updateSearch}  className="form-control" />
                </div>
          
            </div>
            
           
                <hr />
                
                {/* <div className="container">
                    {filterBlogs.map((blog, i) => {
                        return <li key={i}>

                            <img width={500} height={300} mode='fit' src={"/storage/" + blog.image} />
                            <Link to={"post/" + blog.id}>{blog.title} {blog.id}</Link></li>
                    })}

                </div> */}







                <div className="site-section">
              



                    <div className="container">
                        {filterBlogs.map((blog, i) => {
                            return <div className="row" key={blog.id} >

                                {/* <img width={500} height={300} mode='fit' src={"/storage/" + blog.image} /> */}
                                {/* <Link to={"post/" + blog.id}>{blog.title} {blog.id}</Link> */}


                                <div className="col-lg-9">
                                    <div className="section-title">
                                        <span className="caption d-block small"></span>

                                    </div>
                                    <div className="post-entry-2 d-flex">
                                        {/* <img  className="thumbnail order-md-2" mode='fit' src={"/storage/" + blog.image} /> */}
                                        <div className="thumbnail order-md-2" style={{ backgroundImage: `url(${"/storage/" + blog.image})` }}></div>
                                        <div className="contents order-md-1 pl-0">
                                            <h2> <Link to={"post/" + blog.id}>{blog.title} </Link></h2>
                                            <p className="mb-3">{blog.prefer}</p>
                                            <div className="post-meta">
                                                <span className="d-block">Author: {blog.author}</span>
                                                <span className="date-read">Date: {blog.created_at} </span>
                                            </div>
                                            <button className="btn btn-danger" onClick={() => this.delete(blog.id)}>Delete</button>
                                            <Link to={'/EditAdmin/'+ blog.id} className="btn btn-info">Edit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>


                <div className="row pagination  ">
                    <div className="col-lg-6 ">
                        <Pagination

                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={this.state.pageRangeDisplayed}
                            onChange={this.handlePageChange}
                            itemClass=' green'
                            linkClass='text-white page-link green'

                        />
                    </div>
                </div>


            </>



        );
    }
}
