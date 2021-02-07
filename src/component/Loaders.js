import React, { Component } from 'react'

export default class Loaders extends Component {
    render() {
        return (
            <div className="loader-container" id="page-loader">
                <div className="loading-wrapper">
                    <div className="loader-animation" id="loader-animation">
                        <span className="loader"><span className="loader-inner"></span></span>
                    </div>     
                    <div className="loader-name" id="loader-name">
                        John <strong>Rex</strong>
                    </div>
                    <p className="loader-job" id="loader-job">Web Designer & Web Developer</p>
                </div>   
            </div>
        )
    }
}
