import React from 'react';
import {FormField, FormSubmit} from '../../FormAnt/index';
import { Button } from 'reactstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { firebaseLogin } from '../../../actions'
import { connect } from 'react-redux';


const EmailAndPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .required('Password is required'),
});
const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({login}) => {
  const onSubmit = values => {
    console.log('Received values of form: ', values, login);
    login(values)
  };
  return (
    <>
      <div className="col-lg-6">
        <h3>Login</h3>
        <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={EmailAndPasswordSchema}
  >
    <Form className="av-tooltip tooltip-label-right form-custom fade-in">
      <FormField placeholder="E-mail" name="email" />
      <FormField placeholder="Password" name="password" type="password" />
      <div className="text-left">
        <NavLink to="/forgot-password">

        </NavLink>
      </div>
      <div className="text-right">
      <Button className="btn-outshifter-filled" type="submit">
        Login
        </Button>
      </div>
    </Form>
  </Formik>

      </div>
    </>
  )
}


const dispatchToProps = dispatch => {
  return {
      login: data => dispatch(firebaseLogin(data))
  }
}
const mapStateToProps = state =>{
  return{
    
  }
}
export default connect(mapStateToProps,dispatchToProps)(LoginForm)