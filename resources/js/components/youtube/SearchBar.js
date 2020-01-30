import React, { Component } from 'react'
export class SearchBar extends Component {



  
    state = {

        title: "",

        videos: ""

    }
    onChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }
    render() {
        return (

            <div className="form-group" style={{ margin: "9%" }}>

                <h3 className="display-4 text-center">
                    <i className="fas fa-dumbbell fa-1x" /> Search for a workout
                </h3>

                <input



                    style={{ width: "400px", display: "inline", border: "2px green  solid", borderRadius: '2px' }}

                    type="text"

                    placeholder="search.."

                    name="title"

                    value={this.state.title}

                    onChange={this.onChange.bind(this)}

                />

                <button


                    onClick={this.props.find.bind(this, this.state.title)}

                    style={{ width: "100px", marginLeft: "5px" }}

                    className="btn btn-success"

                    type="submit" >

                    Search

                    </button>
            </div>




        )
    }
}


export default SearchBar