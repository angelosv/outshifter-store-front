import React, { Component } from 'react'
import {Helmet} from 'react-helmet'


// aquí importo header y footer de layout global del marketplace
import Header from './Header'
import Footer from './Footer'
class Layout extends Component {
    render() {

        const { containerClassnames } = this.props
        console.log(containerClassnames)
        return (
                <div>
                <Header/>
                        {this.props.children}
                    <Footer/>
                </div>
        )
    }
}

export default Layout