import React, { Component } from 'react';
import axios from 'axios'
// // import NavBar from './NavBar';
import Card from './Card'
import SearchBar from './SearchBar';
import Video from './Video';

export class Youtube2 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         videos: ""

    //     };
    //     // this.handleChange = this.handleChange.bind(this);
    //     // this.onSubmit = this.onSubmit.bind(this)
     
    
    // }
    // }
    state = {

        videos: ""

    }

    find = (title) => {
        // console.log(title.length)

        if (title.length > 0) {

            axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${title}sport
            &type=video&key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s
        `           )

                .then(res => {

                    this.setState({

                        videos: res.data.items

                    })

                }

                )

        }
    }

    render() {

        return (


            <div className="container">
            
                {/* <NavBar/> */}

                <SearchBar find={this.find} />

                {this.state.videos.length === 0 && <Card />}
                {this.state.videos.length > 0 && this.state.videos.map((elem, index) => <Video vid={elem} key={index} />)}





            </div>




        )
    }




}

export default Youtube2