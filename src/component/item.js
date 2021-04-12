import React, { Component } from 'react'
import axios from 'axios'
export default class item extends Component {
    constructor(props) {
		super(props);
		this.state = {
		   datas: [],
    isLoading: true,
    errors: null
		};
	  }
	 getapi=()=>{
		axios.get(`https://okservapi.herokuapp.com/item`)
		.then(response =>
			response.data.data.map(
			  datanya => ({
				itemId        : `${datanya.itemId}`,
				profileId     : `${datanya.profileId}`,
                categoryId    : `${datanya.categoryId}`,
                Description   : `${datanya.Description}`,
                price         : `${datanya.price}`
			
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
        return (
            <div className="section-vcardbody section-page" id="page-item">
                <div className="section-blog">
                <h2 className="section-title">Item</h2>
                <div className="blog-posts"></div>
                {this.state.datas.map((item)=>{
                return <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">item ID</th>
                        <th scope="col">Profile ID</th>
                        <th scope="col">Category ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{item.itemId}</td>
                        <td>{item.profileId}</td>
                        <td>{item.categoryId}</td>
                        <td>{item.Description}</td>
                        <td>{item.price}</td>
                        </tr>
                    </tbody>
                    </table>
              </div>
                })}
                
                </div>
                </div>
        )
    }
}
