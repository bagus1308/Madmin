import React, { Component } from 'react'
import Loaders from './Loaders'
import VCardBody from './VCardBody'
import Resume from './Resume'
import MainMenu from './MainMenu'
import Portofolio from './Portofolio'
import Skill from './Skill'
import Blog from './Blog'
import FormError from './FormError'
import Contact from './Contact'
// import Blog2 from './Blog2'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Loaders />
                <section id="body" className="">
                <div className ="container">
                    <VCardBody />
                    <MainMenu />
                    <Resume />
                    <Portofolio/>
                    <Skill />
                    <Blog />
                    <Contact />


                    
                </div>
                </section>
                    <FormError />
            </div>
        )
    }
}