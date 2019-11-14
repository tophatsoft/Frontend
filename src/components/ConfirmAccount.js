import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import sexy from '../images/sexy.jpg';
import "./AuthForm.css"
import {

    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
} from "mdbreact";

class ConfirmAccount extends Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        }
    }
    componentWillUnmount() {
        this.props.clearError()
    }



    render() {
        return (
            <div id="classicformpage" className="register1" >
                <MDBView src={sexy}>
                    <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBRow >
                                <MDBCol md="6" xl="5" className="mb-4">
                                    <h1>Please confirm your fucking Account</h1>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>

                </MDBView></div>

        )


    }

}


export default ConfirmAccount;