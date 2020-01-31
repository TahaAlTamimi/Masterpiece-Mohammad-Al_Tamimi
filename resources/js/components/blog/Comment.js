import React, { Component } from 'react'
import axios from 'axios';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,


        };
     
    }
   






    edited = () => {

      
        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit,
            changeText: this.props.comment.comment,
        })
    }

    componentDidMount = () => {
      
        this.setState({
            changeText: this.props.comment.comment
        })

    }

    updatecomment = (e) => {
      
        e.preventDefault();
        axios.put(`/editcomments/${this.props.comment.id}`, {
            comment: this.input.value
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
                    <input type='text' ref={(v) => { this.input = v }} defaultValue={this.props.comment.comment} />
                    <button className="btn btn-success">updatedComments</button>

                </form>

                <button onClick={this.edited} className="btn btn-dark" >x</button>

            </div>

        )

    }

    render() {
        
        console.log('yes', this.props.roles)
        
        return (
            <>
                <div>

                    {this.state.isEdit ? this.renderUpdateForm() :  <div>



                        <ul className="comment-list">
                            <li className="comment">

                                <div className="comment-body">
                                    <h5 >{this.state.changeText}</h5>

                                    <div className="meta">{this.props.comment.created_at}</div>
                                    <p>{this.props.comment.name}</p>
                                    {(this.props.roles[0].pivot.user_id == this.props.comment.user_id) ? <div>
                                        <button className="btn btn-info" onClick={() => this.edited()}>Edit</button>

                                        <button className="btn btn-danger" onClick={() => this.props.delete(this.props.comment.id)}>Delete</button>
                                    </div> :
                                        ' '}

                                    {(this.props.roles[0].pivot.role_id == 1) ? <div>

                                        <button className="btn btn-danger" onClick={() => this.props.delete(this.props.comment.id)}>Delete</button>
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

export default Comment;
