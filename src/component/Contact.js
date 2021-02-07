import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div class="section-vcardbody section-page" id="page-contact">
                
                <div class="section-contact">
                    <h2 class="section-title">Contact</h2>
                </div>

                <div class="map">
	            	<div class="map-overlay"></div>
	            	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953" height="250" style={{border:"0"}} allowfullscreen></iframe>
	            </div>

                <div class="contact-infos">
                	<h4 class="contact-subtitle-1"><i class="fa fa-map"></i>&nbsp;   Address</h4>
                	<p>451 Lorem Ipsum, London - Uk</p>
                	<h4 class="contact-subtitle-1"><i class="fa fa-phone-square"></i>&nbsp; Phone</h4>
                	<p>+61 3 8376 6284</p>
                	<h4 class="contact-subtitle-1"><i class="fa fa-envelope"></i>&nbsp; Mail</h4>
                	<p>john.Rex@dotrex.com</p>
                </div>

                <h4 class="contact-subtitle-1"><i class="fa fa-paper-plane-o"></i>&nbsp; Send Me a Message</h4>

                <form id="contactForm" method="post" class="form">
                    <div class="form-group">
		            	<input class="form-control required" id="name" name="name" placeholder="Name" type="text" required />
		            </div>
                    <div class="form-group">
		            	<input class="form-control required" id="email" name="email" placeholder="Email" type="email" required />
		            </div>
                    <div class="form-group">
		            	<input class="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
		            </div>
                    <div class="form-group">
		            	<textarea class="form-control required" id="message" name="message" placeholder="Message" rows="5" required></textarea>
		            </div>
                    <div class="form-group">
		            	<input type="submit" class="btn btn-default form-send" value="Send!" />
		            </div>

                </form>
                
            </div>
        )
    }
}