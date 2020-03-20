import React, { Component } from 'react'


// aquí importo header y footer de layout global del marketplace
import Header from './Header'
import Footer from './Footer'
class Layout extends Component {
    render() {

        const { containerClassnames } = this.props
        console.log(containerClassnames)
        return (
            <div id="app-container" className={containerClassnames}>
                <Header/>
                    <main>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default Layout