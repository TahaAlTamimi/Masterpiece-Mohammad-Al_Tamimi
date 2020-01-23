
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CommentEdit extends Component {






    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            comment: ''
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
            comments: e.target.value
        });
        console.log('onChange', this.state.comments);
    }
    // create handleSubmit method right after handleChange method
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .put(`/editcomments/${this.props.match.params.id}`, {
                comments: this.state.comments
            })
            .then(response => {
                console.log('successfully edited the task');
                this.props.history.push('/');
            });
    }
    // get all tasks from backend
    getTasks() {
        axios.get(`/comments/${this.props.match.params.id}/edit`).then((
            // console.log('jjjjjjjjj',response)
            response //
            //  console.log(response.data.tasks)
        ) =>
            this.setState({
                comment: response.data.comment,
                comments: response.data.comment.comment
            })
        );
    }
    // lifecycle method
    componentWillMount() {
        this.getTasks();
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.comments}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Edit Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentEdit;