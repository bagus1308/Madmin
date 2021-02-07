import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div>
            <div className="section-vcardbody section-page" id="page-blog">
                <div className="section-blog">
                    <h2 className="section-title">Blog</h2>
                </div>
                <div className="blog-posts">
                    <div className="blog-item">
                        <div className="blog-item-wrapper">
                            <div className="blog-item-thumb">
                                <a href="asset/single.html" className="loadPost"><img src="assets/img/blog1.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-pagination">
					<div className="row">
						<div className="col-xs-12">
							<span className="pagination-numbers">
								<a href="#">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#">6</a>
							</span>
						</div>
					</div>								
				</div>
            </div>

           

        </div>
        )
    }
}