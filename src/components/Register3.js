import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
    MDBAnimation,
    MDBInputGroup,
    MDBDatePicker
} from "mdbreact"; import sexy from '../images/sexy.jpg';
import "./AuthForm.css"


//actions
import { registerUser, clearError } from '../actions/authentication';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            show1: true,
            show2: false,
            show3: false,
            selectValue: '',
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            selectValue: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {

        e.preventDefault();
        const user = {
            profileType: this.state.selectValue,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            verifyPassword: this.state.verifyPassword
        }
        this.props.registerUser(user, this.props.history);
        
    }
    componentWillUnmount() {
        this.props.clearError()
    }



    render() {
        var message = 'You selected ' + this.state.selectValue;
        return (
            <div id="classicformpage" className="register1" >
                <MDBView src={sexy}>
                    <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBRow >
                                <MDBCol md="6" xl="5" className="mb-4">
                                    <MDBAnimation type="fadeInRight" delay=".3s">
                                        <MDBCard id="classic-card">
                                            <MDBCardBody className="white-text">
                                                <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Register:
                                                </h3>
                                                <hr className="hr-light" />
                                                <form onSubmit={this.handleSubmit}>
                                                    {this.state.show1 && <MDBInputGroup
                                                        containerClassName="mb-3"
                                                        prepend="Profile type"
                                                        inputs={
                                                            <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                <option value="DEFAULT" disabled>Choose...</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Couple">Couple</option>
                                                            </select>

                                                        }

                                                    />}
                                                    {this.state.show1 && <p>{message}</p>}
                                                    {this.state.show2 && <Fragment>
                                                        <p>Date of birth</p>
                                                        <MDBDatePicker  containerClassName="mb-3" className="browser-default custom-select" getValue={this.getPickerValue} />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Constitutie"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Fat">Fat</option>
                                                                    <option value="Athletic">Athletic</option>
                                                                    <option value="Skinny">Skinny</option>
                                                                </select>

                                                            }


                                                        />
                                                        <MDBInput
                                                            label="Inatimea in cm"  type="number" pattern="[0-9]*"
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Eyes colour"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Brown">Brown</option>
                                                                    <option value="Black">Black</option>
                                                                    <option value="Blue">Blue</option>
                                                                    <option value="Green">Green</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Hair length"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Bald">Bald</option>
                                                                    <option value="Short">Short</option>
                                                                    <option value="Medium-Length">Medium-Length</option>
                                                                    <option value="Long">Long</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Tatoos"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="One">One</option>
                                                                    <option value="Few">Few</option>
                                                                    <option value="Many">Many</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Piercing"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Yes">Yes</option>
                                                                    <option value="No">No</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Smoking"
                                                            inputs={
                                                                <select defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Occasional">Occasional</option>
                                                                    <option value="Rarely">Rarely</option>
                                                                    <option value="Yes">Yes</option>
                                                                </select>
                                                            }
                                                        />
                                                    </Fragment>}
                                                    {this.state.show3 && <Fragment>

                                                    </Fragment>}
                                                    <Fragment>
                                                        <MDBBtn gradient="purple" onClick={() => this.setState({ show1: false, show2: true })} className="float-right" type="submit" value="Submit">
                                                            Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                        </MDBBtn>
                                                    </Fragment>

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

            // <div id="classicformpage">
            //     <MDBView src={sexy}>
            //         <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            //             <MDBContainer>
            //                 <MDBRow>
            //                     <MDBCol md="6" xl="5" className="mb-4">
            //                         <MDBAnimation type="fadeInRight" delay=".3s">
            //                             <MDBCard id="classic-card">
            //                                 <MDBCardBody className="white-text">
            //                                     <h3 className="text-center">
            //                                         <MDBIcon icon="user" /> Register:
            //             </h3>
            //                                     <hr className="hr-light" />
            //                                     <form onSubmit={this.handleSubmit}>
            //                                         <MDBInput
            //                                             className="white-text"
            //                                             iconClass="white-text"
            //                                             label="Your email"
            //                                             icon="envelope"
            //                                             name="email"
            //                                             onChange={this.handleInputChange}
            //                                             value={this.state.email}
            //                                         />
            //                                         <MDBInput
            //                                             className="white-text"
            //                                             iconClass="white-text"
            //                                             label="Your password"
            //                                             icon="lock"
            //                                             type="password"
            //                                             name="password"
            //                                             onChange={this.handleInputChange}
            //                                             value={this.state.password}
            //                                         />
            //                                         <MDBInput
            //                                             className="white-text"
            //                                             iconClass="white-text"
            //                                             label="Verify password"
            //                                             icon="lock"
            //                                             type="password"
            //                                             name="verifyPassword"
            //                                             onChange={this.handleInputChange}
            //                                             value={this.state.verifyPassword}
            //                                         />
            //                                         <div className="text-center mt-4 black-text">
            //                                             <MDBBtn type="submit" color="indigo">Sign Up</MDBBtn>
            //                                             {this.props.errors ? <p style={{ color: 'red' }}>{this.props.errors.errorMessage}</p> : null}

            //                                             <hr className="hr-light" />
            //                                             <div className="text-center d-flex justify-content-center white-label">
            //                                                 <Link to="/login" className="p-2 m-2">
            //                                                     <h6 className="text-center">
            //                                                         Already have an account?
            //                         </h6>
            //                                                 </Link>
            //                                             </div>
            //                                         </div>
            //                                     </form>
            //                                 </MDBCardBody>
            //                             </MDBCard>
            //                         </MDBAnimation>
            //                     </MDBCol>
            //                 </MDBRow>
            //             </MDBContainer>
            //         </MDBMask>
            //     </MDBView>
            // </div>
        )
    }
}

Register.propTypes = {
    clearError: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser, clearError })(withRouter(Register))