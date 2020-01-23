import React, { Component } from 'react'



export class VideoShow extends Component {


    render() {

        return (
            <div ><div className="row ">
                {this.props.video.map((item, index) => {
                    return (

                        <div key={index} className=" col-md-4">
                            <div className=" mb-4 shadow-lg card">
                                <div className="card-body">
                                    <h4 className="text-center mb-4 top_title_vid ">{item.snippet.title}</h4>
                                    <iframe
                                        width="100%"
                                        title="shown"
                                        height="315" src={`//www.youtube.com/embed/${item.id.videoId}`} allowFullScreen key={index}></iframe>
                                    <h6 className="text-center mb-4 descrip_vide">{item.snippet.description}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            </div>
        )
    }
}

export default VideoShow