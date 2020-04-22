import React from 'react';
import Button from 'antd'
import { Form, Formik } from 'formik';
import { Input } from 'antd';
import { FormikField } from '../../FormikFields';



const handleSubmit = () => {}
const LoginForm = (handleSubmit) => {

  return (
    <>
      <div className="col-lg-6">
        <h3>Login</h3>
        <div className="theme-card">

        </div>
        <div className="theme-card">
          <Formik
            initialValues={'model'}
            onSubmit={''}
            validationSchema={''}
          >
            <Form>
              <div className="form-group">
                <FormikField
                  //label="user.register-address"
                  labelStyle={{ fontWeight: 500, color: 'black' }}
                  name="address"
                  placeholder="Address *"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default LoginForm