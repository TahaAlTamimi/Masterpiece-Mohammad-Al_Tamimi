import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Pagination from "react-js-pagination";


export default class RenderRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
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
        axios.get('/getrecipes?page=' + pageNumber)

            .then(res => {

                this.setState({
                    recipes: res.data.data,
                    itemsCountPerPage: res.data.per_page,
                    totalItemsCount: res.data.total,
                    activePage: res.data.current_page,

                });

            })
    }

    delete(id) {
        console.log('deletform',id)
        const isNotId = recipe => recipe.id !== id;

        const updatedrecipes = this.state.recipes.filter(isNotId);
        this.setState({ recipes: updatedrecipes });
        console.log('id', id)

        axios.delete(`/deleterecipes/${id}`)
            .then(res => {
                console.log('ress', [res.data])
            });


    }

    componentDidMount() {

        axios.get('/getrecipes')

            .then(res => {

                this.setState({
                    recipes: res.data.data,
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
        console.log(this.state.recipes)
        // console.log('search:', this.state.search)
        let filterrecipes = this.state.recipes.filter(
            (recipe) => {
                return recipe.title.toLowerCase().indexOf(this.state.search) !== -1
            }

        )


        // console.log('filter', filterrecipes.length)
        // console.log('pageRangeDisplayed', this.state.pageRangeDisplayed)
        return (
            <>
            <h1>Admin Recipe</h1>
            <div className="search-form d-inline-block">
                <div className="d-flex">
                <input type='text' placeholder='Search...' value={this.state.search} onChange={this.updateSearch}  className="form-control" />
                </div>
          
            </div>
            
           
                <hr />
                
                {/* <div className="container">
                    {filterrecipes.map((recipe, i) => {
                        return <li key={i}>

                            <img width={500} height={300} mode='fit' src={"/storage/" + recipe.image} />
                            <Link to={"post/" + recipe.id}>{recipe.title} {recipe.id}</Link></li>
                    })}

                </div> */}







                <div className="site-section">
              



                    <div className="container">
                        {filterrecipes.map((recipe, i) => {
                            return <div className="row" key={recipe.id} >

                                {/* <img width={500} height={300} mode='fit' src={"/storage/" + recipe.image} /> */}
                                {/* <Link to={"post/" + recipe.id}>{recipe.title} {recipe.id}</Link> */}


                                <div className="col-lg-9">
                                    <div className="section-title">
                                        <span className="caption d-block small"></span>

                                    </div>
                                    <div className="post-entry-2 d-flex">
                                        {/* <img  className="thumbnail order-md-2" mode='fit' src={"/storage/" + recipe.image} /> */}
                                        <div className="thumbnail order-md-2" style={{ backgroundImage: `url(${"/storage/" + recipe.image})` }}></div>
                                        <div className="contents order-md-1 pl-0">
                                            <h2> <Link to={"post/" + recipe.id}>{recipe.title} </Link></h2>
                                            <p className="mb-3">{recipe.prefer}</p>
                                            <div className="post-meta">
                                                <span className="d-block">Author: {recipe.author}</span>
                                                <span className="date-read">Date: {recipe.created_at} </span>
                                            </div>
                                            <button className="btn btn-danger" onClick={() => this.delete(recipe.id)}>Delete</button>
                                            <Link to={'/EditRecipe/'+ recipe.id} className="btn btn-info">Edit</Link>
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
