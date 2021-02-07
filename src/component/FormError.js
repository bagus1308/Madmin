import React, { Component } from 'react'

export default class FormError extends Component {
    render() {
        return (
            <div>
            <div className="form-result modal-wrap" id="contactSuccess">
                <div className="modal-bg"></div>
                <div className="modal-content">
                    <h4 className="modal-title"><i className="fa fa-times"></i> Success</h4>
                </div>
                <p>Your message has been sent to us.</p>
            </div>
            <div className="form-result modal-wrap" id="contactError">
                <div className="modal-bg"></div>
                <div className="modal-content">
                    <h4 className="modal-title"><i className="fa fa-times"></i> Error</h4>
                </div>
                <p>There was an error sending your message.</p>
            </div>

        </div>
        )
    }
}
