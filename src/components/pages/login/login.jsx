import React, { useState, useEffect } from 'react';
import {FormField, FormSubmit} from '../../FormAnt/index';
import { Button } from 'reactstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { firebaseLogin } from '../../../actions'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Drawer from 'react-drag-drawer'





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

const LoginForm = ({login, authUser}) => {
  const [open, setOpen] = useState(false);

  const {loading} = authUser
  



  
  const onSubmit = values => {
    console.log('Received values of form: ', values, login, loading);
    login(values)
  };
  return (
    
    <>
   <div className="col-lg-6">
     
   
   {loading?  <Loader
         type="TailSpin"
         color="#00BFFF"
         height={50}
         width={50}
 className="loader-spinner"
      />
    :   
      <div>
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
      }
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
    authUser: state.authUser
  }
}
export default connect(mapStateToProps,dispatchToProps)(LoginForm)