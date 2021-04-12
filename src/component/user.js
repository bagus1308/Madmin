import React, { Component } from 'react'
import axios from 'axios'

export default class user extends Component {
    constructor(props) {
		super(props);
		this.state = {
		   datas: [],
    isLoading: true,
    errors: null
		};
	  }
	 getapi=()=>{
		axios.get(`https://okservapi.herokuapp.com/pen`)
		.then(response =>
			response.data.data.map(
			  datanya => ({
				name        : `${datanya.name}`,
				email       : `${datanya.email}`,
                password    : `${datanya.password}`,
                address     : `${datanya.address}`,
                location    : `${datanya.location}`
			
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
            <div className="section-vcardbody section-page" id="page-user">
                <div className="section-blog">
                <h2 className="section-title">User</h2>
                <div className="blog-posts"></div>
                {this.state.datas.map((users)=>{
                return <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.password}</td>
                        <td>{users.address}</td>
                        <td>{users.location}</td>
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
