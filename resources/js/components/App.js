import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Form from './Admin/Form';
import { BrowserRouter, Route } from "react-router-dom";
import Blog from './blog/Blog';
import Show from './blog/Show';
import AppCalculate from './calculate/Calculate';
import MyApp from './youtube/Youtube ';
import CommentEdit from './blog/CommentEdit';
import RecipeForm from './Admin/RecipeForm';
import Recipe from './Recipe/Recipe';
import ShowRecipe from './Recipe/ShowRecipe';
import Question from './Question/QuestionForm';
import AllQuestion from './AnswerForm/AllQuestions';
import Answer from './AnswerForm/Answer';
import Home from './blog/Home';
import BlogRender from './blog/RenderBlog';
import EditAdminBlog from './blog/EditAdminBlog';
import RecipeRender from './Recipe/RenderRecipe';
import EditRecipe from './Recipe/EditRecipe';
export default class App extends Component {
    render() {
        return (
            <>
                {/* <div>
                    <h1>Iam app compoooooooooooooooonent</h1>
                </div> */}
                <BrowserRouter>
                    {/* <Route path="/home" component={Home} exact /> */}
                    <Route path='/' component={Home} exact />
                    <Route path='/post' component={Form} exact />
                    <Route path='/blog' component={Blog} exact />
                    <Route path='/post/:id' exact render={props => <Show{...props} />} />
                    <Route path='/calculate' component={AppCalculate} exact />
                    <Route path='/youtube' component={MyApp} exact />
                    <Route path="/:id/edit" component={CommentEdit} exact />
                    <Route path='/Adminrecipe' component={RecipeForm} exact />
                    <Route path='/recipe' component={Recipe} exact />
                    <Route path='/recipe/:id' exact render={props => <ShowRecipe{...props} />} />
                    <Route path='/question' component={Question} exact />
                    <Route path='/AllQuestionExpert' component={AllQuestion} exact />
                    <Route path='/question/:id' exact render={props => <Answer{...props} />} />

                    <Route path='/blogAdmin' component={BlogRender} exact />
                    <Route path='/EditAdmin/:id' exact render={props => <EditAdminBlog{...props} />} />
                    <Route path='/recipeAdmin' component={RecipeRender} exact />

                    <Route path='/EditRecipe/:id' exact render={props => <EditRecipe{...props} />} />
                    </BrowserRouter>
                {/* <Router>

                    <Route exact path='/' Component={Form} />
                    <Route exact path='/post' Component={Blog} />

                </Router> */}

                {/* <Form/> */}


            </>

        );
    }
}

