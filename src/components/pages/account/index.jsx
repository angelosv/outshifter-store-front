import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
class Account extends Component {
    constructor(props) {
        super(props)
    }






    render() {
const {login} = this.props

        return (
            <div>

                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <h1>HELLLO</h1>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}




export default compose(withRouter)(Account)