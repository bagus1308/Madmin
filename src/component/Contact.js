import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="section-vcardbody section-page" id="page-contact">
                
                <div className="section-contact">
                    <h2 className="section-title">Contact</h2>
                </div>

                <div className="map">
	            	<div className="map-overlay"></div>
	            	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953" height="250" style={{border:"0"}} allowfullscreen></iframe>
	            </div>

                <div className="contact-infos">
                	<h4 className="contact-subtitle-1"><i className="fa fa-map"></i>&nbsp;   Address</h4>
                	<p>451 Lorem Ipsum, London - Uk</p>
                	<h4 className="contact-subtitle-1"><i className="fa fa-phone-square"></i>&nbsp; Phone</h4>
                	<p>+61 3 8376 6284</p>
                	<h4 className="contact-subtitle-1"><i className="fa fa-envelope"></i>&nbsp; Mail</h4>
                	<p>john.Rex@dotrex.com</p>
                </div>

                <h4 className="contact-subtitle-1"><i className="fa fa-paper-plane-o"></i>&nbsp; Send Me a Message</h4>

                <form id="contactForm" method="post" className="form">
                    <div className="form-group">
		            	<input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
		            </div>
                    <div className="form-group">
		            	<input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
		            </div>
                    <div className="form-group">
		            	<input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
		            </div>
                    <div className="form-group">
		            	<textarea className="form-control required" id="message" name="message" placeholder="Message" rows="5" required></textarea>
		            </div>
                    <div className="form-group">
		            	<input type="submit" className="btn btn-default form-send" value="Send!" />
		            </div>

                </form>
                
            </div>
        )
    }
}