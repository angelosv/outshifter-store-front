import React from 'react';
import Button from 'antd'

const handleSubmit = (e) => {
console.log('sds',e)
}

const LoginForm = (handleSubmit) => (

    <>
    <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={() => handleSubmit()}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" required="" />
                                        </div>
                                        <a href="#" className="btn btn-solid">Login</a>
                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </div>
    </>
)

export default LoginForm