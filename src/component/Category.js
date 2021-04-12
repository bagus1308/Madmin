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
		axios.get(`https://okservapi.herokuapp.com/category`)
		.then(response =>
			response.data.data.map(
			  datanya => ({
				photo: `${datanya.photo}`,
				type: `${datanya.type}`
			
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
			
            <div className="section-vcardbody section-page" id="page-category">
                <div className="section-blog">
                <h2 className="section-title">Category</h2>
                <div className="blog-posts">
                {this.state.datas.map((category) => {
				  return <div className="blog-item">
                        <div className="blog-item-wrapper">
                            <div className="blog-item-thumb">
							                <img src={category.photo} />
                             {category.type}
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
