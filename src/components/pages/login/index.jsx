import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import LoginForm from './login'
import RegisterForm from './register'



class Login extends Component {
    constructor(props) {
        super(props)
    }






    render() {

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




export default compose(withRouter)(Login)