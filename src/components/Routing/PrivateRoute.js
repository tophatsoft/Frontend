import React from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated }, ...rest }) => {
   return (
       <Route 
       {...rest} 
       render = {props => 
        isAuthenticated ? <Component {...props}/> : <Redirect to={'/login'}/>} />
   )
}




PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps,{})(withRouter(PrivateRoute))