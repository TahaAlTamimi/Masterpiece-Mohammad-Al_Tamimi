import React, { Component } from 'react'
import axios from 'axios';

class CommentsRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,


        };
      
    }
    // handle change






    edited = () => {

        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit,
            changeText: this.props.recipecomment.comment,
        })
    }

    componentDidMount = () => {
        this.setState({
            changeText: this.props.recipecomment.comment
        })

    }

    updatecomment = (e) => {
        e.preventDefault();
        axios.put(`/editcommentsrecipe/${this.props.recipecomment.id}`, {
            recipecomment: this.input.value
        })
            .then(response => {
                this.setState({
                    changeText: response.data.comment
                })


              


            });

        this.edited()
    }


    renderUpdateForm = () => {

        // 

        return (
            <div>
                <form onSubmit={this.updatecomment}>
                    <input type='text' ref={(v) => { this.input = v }} defaultValue={this.props.recipecomment.comment} />
                    <button className="btn btn-success">updatedComments</button>

                </form>

                <button onClick={this.edited} className="btn btn-dark" >x</button>

            </div>

        )

    }

    render() {
       
        return (
            <>
     

                <div>

                    {this.state.isEdit ? this.renderUpdateForm() : <div>



                        <ul className="comment-list">
                            <li className="comment">

                            
                                <div className="comment-body">
                                    <h3>{this.state.changeText}</h3>
                                    <div className="meta">{this.props.recipecomment.created_at}</div>
                                    <p >{this.props.recipecomment.name}</p>
                                    {(this.props.roles[0].pivot.user_id == this.props.recipecomment.user_id) ? <div>
                                        <button className="btn btn-info" onClick={() => this.edited()}>Edit</button>

                                        <button className="btn btn-danger" onClick={() => this.props.delete(this.props.recipecomment.id)}>Delete</button>
                                    </div> :
                                        ' '}

                                    {(this.props.roles[0].pivot.role_id == 1) ? <div>
                                    
                                        <button className="btn btn-danger" onClick={() => this.props.delete(this.props.recipecomment.id)}>Delete</button>
                                    </div> :
                                        ' '}

                                </div>

                            </li>
                        </ul>
                    </div> 


                    }


                </div>
            </>
        );
    }
}

export default CommentsRecipe;
