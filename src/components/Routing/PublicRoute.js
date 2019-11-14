import React from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, auth: { isAuthenticated }, ...rest }) => {
   return (
       <Route 
       {...rest} 
       render = {props => 
        isAuthenticated ? 
       <Redirect to={'/home'} /> : 
        <Component {...props}/>} />
   )
}




PublicRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{})(withRouter(PublicRoute))