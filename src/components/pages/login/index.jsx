import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login'
import RegisterForm from './register'



class Login extends Component {
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
                            <LoginForm />
                            <RegisterForm />

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}




export default connect()(Login)