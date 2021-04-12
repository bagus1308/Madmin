import React, { Component } from 'react'

export default class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu" id="main-menu">
			<ul className="main-menu-list">
				<li><a href="#page-resume" 		className="link-home">Home</a></li>
				<li><a href="#page-category" 	className="link-page">Category</a></li>
				<li><a href="#page-user" 		className="link-page">User</a></li>
				<li><a href="#page-item" 		className="link-page">item</a></li>

			</ul>
		</div>
        )
    }
}