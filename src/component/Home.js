import React, { Component } from 'react'
import Loaders from './Loaders'
import VCardBody from './VCardBody'

import MainMenu from './MainMenu'

import FormError from './FormError'

import Category from './Category'
import User from './user'
import Item from './item'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Loaders />
                <section id="body" className="">
                <div className ="container">
                    <VCardBody />
                    <MainMenu />
                    <Category />
                    <User />
                    <Item />


                    
                </div>
                </section>
                    <FormError />
            </div>
        )
    }
}