import React, { Component } from 'react';
import {browserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
const PrivateRoute = ({component: Component, ...rest }) => (authUser) => (
    
    <Route {...rest} render={(props) => (
        authUser? 
        <Component {...props}/>
    :<Redirect to={`${process.env.PUBLIC_URL}/login`}/>
    )}>
{ console.log(authUser,'esto es auth user')}
    </Route>
)

const mapStateToProps = state => ({
authUser: true
});
  


export default connect(mapStateToProps)(PrivateRoute)