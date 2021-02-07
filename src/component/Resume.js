import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div className="section-vcardbody section-page" id="page-resume">
                <div className="section-education">
                    <h2 className="section-title">Resume</h2>
                    
                    <div className="resume-buttons header-page-buttons">
                        <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download"></i>&nbsp; Download my resume</a>
					    <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download"></i>&nbsp;  Get in Touch</a>
                    </div>
                    <h2 className="section-title2"><i className="fa fa-university"></i>&nbsp; Education</h2>
                    <div className="resume-item">
                        <h3 className="section-item-title-1">Graphic Design</h3>
                        <h4 className="graduation-time">St. Patrick University (2 Years Course) - <span className="graduation-date">Graduation May 2013</span></h4> 	
                  	    <div className="graduation-description">
                  	        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  	    </div>
                    </div>
                </div>
                <div className="section-education">
                    <h2 className="section-title2"><i className="fa fa-flag"></i>&nbsp; Work Experience</h2>
                <div className="resume-item">
                    <h3 className="section-item-title-1">DotRex Co.</h3>
                        <h4 className="job">Lead Designer - <span className="job-date">June 2012 - Current</span></h4>
                        <div className="graduation-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                </div>
                <div className="resume-item">
                    <h3 className="section-item-title-1">Dupstudio</h3>
                  	    <h4 className="job">Designer - <span className="job-date">Jan 2010 - Apr 2012</span></h4>
                        <div className="graduation-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                </div>        
            </div>
            <h2 className="section-title2"><i className="fa fa-commenting"></i>&nbsp; Testimonials</h2>
            <div className="testimonials">
                <div className="testimonial-slides" id="testimonial-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-content">
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
						</div>
                        <div className="testimonial-credits">
                            <div className="testimonial-picture">
								<img src="../img/team2.jpg" alt=""/>
							</div>
                            <p className="testimonial-author">Melissa Alvarez</p>
							<p className="testimonial-firm">Trexus Co.</p>	
                        </div>
                    </div>                  
                </div>
            </div>
            <div className="page-footer">
	            <div className="resume-buttons">
					<a href="#" className="btn btn-default btn-default2"><i className="fa fa-download"></i>&nbsp; Download my resume</a>
					<a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download"></i>&nbsp;  Get in Touch</a>
	            	
	            </div>
	            <p className="footer-quote">"The best way to predict the future is to create it" <br/><i>Peter Drucker</i></p>
			</div>


            </div>
        )
    }
}
