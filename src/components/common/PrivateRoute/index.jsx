import React, { Component } from 'react';
import {browserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';



const PrivateRoute = ({
    component: Component,
    isAuthenticated,
     ...rest }) => (
    
    <Route {...rest} render={(props) => (
        isAuthenticated?
        <Component {...props}/>
   :<Redirect to={{
    pathname: '/login',
    state: { from: props.location }
  }} />
    )}>
    </Route>
)

const mapStateToProps = state => ({
    isAuthenticated: state.authUser.authId
});
  


export default connect(mapStateToProps)(PrivateRoute)