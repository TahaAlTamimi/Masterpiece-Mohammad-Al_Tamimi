import React, { Component } from 'react';

import Form from './Admin/Form';
import Blog from './blog/Blog';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
<Router>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/post'>Bolg</Link>
        {/* <Link to='/post/{id}'>Show</Link> */}

        <Route exact path='/' Component={Form}/>
        <Route exact path='/post' Component={Blog}/>
        {/* <Route exact path='/post/{id}' Component={Show}/> */}
    </div>



</Router>
            

        );
    }
}