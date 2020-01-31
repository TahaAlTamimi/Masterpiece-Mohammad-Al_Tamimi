import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Pagination from "react-js-pagination";


export default class Blog extends Component {
    _isMounted = false;
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

    componentDidMount() {
        this._isMounted = true;
        axios.get('/getposts')

            .then(res => {
                if (this._isMounted) {
                    this.setState({
                        blogs: res.data.data,
                        itemsCountPerPage: res.data.per_page,
                        totalItemsCount: res.data.total,
                        activePage: res.data.current_page,

                    });
                }

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
        console.log('wwwwww',this.state.blogs)
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


            

                <hr />
                <div className="search-form d-inline-block">
                    <div className="d-flex">
                        <input type='text' placeholder='Search...' value={this.state.search} onChange={this.updateSearch} className="form-control" />
                    </div>

                </div>


                <hr />


               











                <div className="blog-area mt-50 section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="fitness-blog-posts">
                                    <div className="row">
                                        {filterBlogs.map((blog, i) => {
                                            return (

                                                <div className="col-12" key={blog.id}>

                                                   
                                                    <div className="single-blog-post mb-100">

                                                        <div className="blog-post-thumb mb-30"></div>
                                                        <img src={"/storage/" + blog.image} alt="" />
                                                       
                                                    </div>
                                                    <Link  to={"post/" + blog.id}><h4 className="post-title">{blog.title} </h4></Link>
                                                    {/* <a href="#" className="post-title">10 Healthy foods for a good living</a> */}

                                                    <div className="post-meta">
                                                        <p>By<a href="#"> {blog.author}</a> | in Articles  </p>
                                                    </div>

                                                    <p>{blog.prefer}</p>
                                                    <div className="post-date">
                                                            <p><span>{blog.created_at}</span></p>
                                                        </div>
                                                </div>


                                            )
                                        })}


                                    </div>


                                   

                                </div>
                            </div>




                            {/* side bar */}
                            <div className="col-12 col-md-4">
                                <div className="fitness-blog-sidebar">


                                    <div className="add-widget mb-100">
                                        <a href="#"><img src={"img/bg-img/add3.png"} alt="" /></a>
                                    </div>

                                    <div className="latest-blog-posts mb-100">
                                        <h5>Latest Posts</h5>
                                        <div className="single-latest-blog-post">
                                            <div className="post-thumbnail">
                                                <img src={"img/blog-img/6.png"} alt="" />
                                            </div>
                                            <div className="post-content">

                                                <a href="#" className="post-title">10 Healthy foods for a good living</a>

                                                <div className="post-meta">
                                                    <p>By <a href="#">Admin</a> | in <a href="#">Health</a> | <a href="#">3 comments</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-latest-blog-post">
                                            <div className="post-thumbnail">
                                                <img src={"img/blog-img/6.png"} alt="" />
                                            </div>
                                            <div className="post-content">

                                                <a href="#" className="post-title">10 Healthy foods for a good living</a>

                                                <div className="post-meta">
                                                    <p>By <a href="#">Admin</a> | in <a href="#">Health</a> | <a href="#">3 comments</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-latest-blog-post">
                                            <div className="post-thumbnail">
                                                <img src={"img/blog-img/6.png"} alt="" />
                                            </div>
                                            <div className="post-content">

                                                <a href="#" className="post-title">10 Healthy foods for a good living</a>

                                                <div className="post-meta">
                                                    <p>By <a href="#">Admin</a> | in <a href="#">Health</a> | <a href="#">3 comments</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="add-widget mb-100">
                                        <a href="#"><img src={"img/bg-img/add4.png"} alt="" /></a>
                                    </div>
                                   
                                </div>
                            </div>





                            <div className="row pagination  ">
                                <div className="col-lg-6  fitness-pagination-area">
                                    <Pagination

                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                        onChange={this.handlePageChange}
                                        itemClass=' green'
                                        linkClass='text-white  page-link green'

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                          
                        </div>
                    </div>
                </div>





            </>



        );
    }
}
