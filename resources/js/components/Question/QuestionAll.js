// import React, { Component } from 'react'
// import axios from 'axios';

// class QuestionAll extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isEdit: false,


//         };
//         // bind
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//         // this.delete = this.delete.bind(this);
//         // this.edited = this.edited.bind(this);
//         // this.renderUpdateForm = this.renderUpdateForm.bind(this);
//     }
//     // handle change






//     edited = () => {

//         // console.log('idddd', this.state.isEdit)
//         let { isEdit } = this.state
//         this.setState({
//             isEdit: !isEdit,
//             changeText: this.props.comment.comment,
//         })
//     }

//     componentDidMount = () => {
//         // // console.log('from mountedddddd')
//         // this.setState({
//         //     changeText: this.props.comment.comment
//         // })

//     }

//     updatecomment = (e) => {
//         // console.log('frommmm edit',this.props.comment.id,'wanted: ',this.input.value)
//         e.preventDefault();
//         axios.put(`/editcomments/${this.props.comment.id}`, {
//             comment: this.input.value
//         })
//             .then(response => {
//                 // console.log('successfully edited the comment', response.data);
//                 this.setState({
//                     changeText: response.data.comment
//                 })


//                 // this.props.history.push('/');
//                 // console.log('endd', this.props.comment)



//             });

//         this.edited()
//     }


//     renderUpdateForm = () => {

//         // 

//         return (
//             <div>
//                 <form onSubmit={this.updatecomment}>
//                     <input type='text' ref={(v) => { this.input = v }} defaultValue={this.props.comment.comment} />
//                     <button className="btn btn-success">updatedComments</button>

//                 </form>

//                 <button onClick={this.edited} className="btn btn-dark" >x</button>

//             </div>

//         )

//     }

//     render() {
//         // console.log('endd', this.props.comment)
//         // console.log('yes', this.props.roles)
//         // console.log('hello22',this.state.changeText)
//          console.log('yes', this.props.q)
//          console.log('yeswewwew', this.props.q.question.answer)

//         return (
//             <>
//             <div>
//             {this.props.q.question}
//             {this.props.q.answer ? this.props.q.answer.answer : "noanswers"} 
//             <button onClick={() => this.props.delete(this.props.q.id)}>Delete</button>
//             <hr/>
//             </div>
//                 {/* <div>

//                     {this.state.isEdit ? this.renderUpdateForm() : <div>



//                         <ul className="comment-list">
//                             <li className="comment">


//                                 <div className="comment-body">
//                                     <h3>{this.props.comment.name}</h3>
//                                     <div className="meta">{this.props.comment.created_at}</div>
//                                     <p >{this.state.changeText}</p>
//                                     {(this.props.roles[0].pivot.user_id == this.props.comment.user_id) ? <div>
//                                         <button className="btn btn-info" onClick={() => this.edited()}>Edit</button>

//                                         <button className="btn btn-danger" onClick={() => this.props.delete(this.props.comment.id)}>Delete</button>
//                                     </div> :
//                                         ' '}

//                                     {(this.props.roles[0].pivot.role_id == 1) ? <div>
                                    
//                                         <button className="btn btn-danger" onClick={() => this.props.delete(this.props.comment.id)}>Delete</button>
//                                     </div> :
//                                         ' '}

//                                 </div>

//                             </li>
//                         </ul>
//                     </div>


//                     }


//                 </div> */}
//             </>
//         );
//     }
// }

// export default QuestionAll;
