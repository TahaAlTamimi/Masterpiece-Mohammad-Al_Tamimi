import React, { Component } from 'react'
import axios from 'axios';
import VideoShow from './VideoShow';


export class Card extends Component {

    

    state = {

        videos: ""

    };

    componentDidMount = () => {

        axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=
        OFFICIALTHENX
        &type=video&key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s`
        )
            .then(res => {
                this.setState({

                    videos: res.data.items

                })

            })

            .catch(err => console.log(err))

    }

    render() {

        return (
            <>

                {

                    this.state.videos.length > 0 && <VideoShow video={this.state.videos} />

                }







            </>
        )
    }
}

export default Card