import React from 'react';
import Button from 'antd'
import { Form } from 'antd';
import {FormField, FormSubmit} from '../../FormAnt/index';


const LoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <div className="col-lg-6">
        <h3>Login</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="theme-card">
            <FormField placeholder="E-mail" name="email" />
            <FormField placeholder="Password" name="password" password />

            <FormSubmit placeholder="" label="Login" />
            </div>

        </Form>

      </div>
    </>
  )
}

export default LoginForm