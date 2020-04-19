import React from 'react';
import Button from 'antd'



const LoginForm = (onSubmit) => {
const handleSumbit = ({email}) =>{
console.log('handle submit',email)
}
    
    return(
<>
    <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={handleSumbit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" name="email"
                                                   required="" />
                                                   <Input
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onFocus={handleInputFocus}
                className={classnames(errors.name && classes.error)}
              />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" required="" />
                                        </div>
                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </div>
    </>
)}

export default LoginForm