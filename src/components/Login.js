import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {

    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation
} from "mdbreact"; import sexy from '../images/sexy.jpg';
import "./AuthForm.css"


// redux actions
import { loginUser, clearError } from '../actions/authentication';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentWillUnmount() {
        this.props.clearError()
    }


    render() {
        return (
            <div id="classicformpage">
                <MDBView src={sexy}>
                    <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="white-text">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Login:
                                                 </h3>
                                                <hr className="hr-light" />
                                                <form onSubmit={this.handleSubmit}>
                                                    <MDBInput
                                                        name="email"
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Your email"
                                                        icon="envelope"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.email}
                                                    />
                                                    <MDBInput
                                                        name="password"
                                                        className="white-text"
                                                        iconClass="white-text"
                                                        label="Your password"
                                                        icon="lock"
                                                        type="password"
                                                        onChange={this.handleInputChange}
                                                        value={this.state.password}
                                                    />
                                                    <div className="text-center mt-4 black-text">
                                                        <MDBBtn type="submit" color="indigo">Sign In</MDBBtn>
                                                        {this.props.errors ? <p style={{ color: 'red' }}>{this.props.errors.errorMessage}</p> : null}
                                                        <hr className="hr-light" />
                                                        <div className="text-center d-flex justify-content-center white-label">
                                                            <Link to="#!" className="p-2 m-2">
                                                                <h6 className="text-center">
                                                                    Forgot your password?
                                                                 </h6>
                                                            </Link>
                                                            <Link to="/register" className="p-2 m-2">
                                                                <h6 className="text-center">
                                                                    Don't have an account?
                                                                </h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser, clearError })(Login)