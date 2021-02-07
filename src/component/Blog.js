// import React, { Component,useEffect, useState } from 'react'
import React, { Component,useEffect, useState } from 'react';
import axios from 'axios'



export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
		   datas: [],
    isLoading: true,
    errors: null
		};
	  }
	 getapi=()=>{
		axios.get(`https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`, { headers: { 'app-id': '601f98272a899f3af17cfd36' }},{delayed : true} )
		.then(response =>
			response.data.data.map(
			  datanya => ({
				image: `${datanya.image}`,
				text: `${datanya.text}`
			
			  })
			 
			)
		  )
	 
		  .then(datas => {
			this.setState(
			  {
				datas,
				isLoading: false
			  },
			  console.log(datas)
			);
		  })
		  .catch(error => this.setState({ error, isLoading: false }));
	}
	  componentDidMount() {
		this.getapi();
		console.log(this.getapi());
		
		}

	 

    render() {
		const { isLoading, datas } = this.state;
        return (
			
            <div class="section-vcardbody section-page" id="page-blog">
                <div class="section-blog">
                <h2 class="section-title">Blog</h2>
                <div class="blog-posts">
                {this.state.datas.map((blog) => {
				  return <div className="blog-item">
                        <div className="blog-item-wrapper">
                            <div className="blog-item-thumb">
							<img src={blog.image} />
                             {blog.text}
                            </div>
                        </div>
                    </div>
	})}
                </div>
                </div>
            </div>
        
        )
    }
}
