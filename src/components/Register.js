import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
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
    MDBSelect,
    MDBDatePicker,
    MDBInputGroup,
    MDBAlert,
    MDBSelectInput,
    MDBSelectOption,
    MDBSelectOptions
    
} from "mdbreact"; import sexy from '../images/sexy.jpg';
import "./AuthForm.css"


//actions
import { registerUser, clearError } from '../actions/authentication';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            profileType: '',
            maleDOB: new Date(),        
            constitutionMale:'',
            heightMale:'',
            eyesColourMale:'',
            hairMale:'',
            tatoosMale:'',
            piercingMale:'',
            smokingMale:'',
            alcoholMale:'',
            maleDescription:'',
            femaleDOB:new Date(),
            constitutionFemale:'',
            heightFemale:'',
            eyesColourFemale:'',
            hairFemale:'',
            tattoosFemale:'',
            piercingFemale:'',
            smokingFemale:'',
            alcoholFemale:'',
            femaleDescription:'',
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkProfileType = this.checkProfileType.bind(this);
        this.coupleRegister = this.coupleRegister.bind(this);
        this.finishRegister = this.finishRegister.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        })
        
    }
    


    
    handleSubmit(e) {
        this.e.preventDefault();
        const user = {
            profileType: this.state.profileType,
            maleDOB: this.state.maleDOB,
            constitutionMale: this.state.constitutionMale,
            heightMale: this.state.heightMale,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            verifyPassword: this.state.verifyPassword,
            eyesColourMale: this.state.eyesColourMale,
            hairMale: this.state.hairMale,
            tatoosMale:this.state.tatoosMale,
            piercingMale: this.state.piercingMale,
            smokingMale:this.state.smokingMale,
            alcoholMale:this.state.alcoholMale,
            maleDescription:this.state.maleDescription,
            femaleDOB: this.state.femaleDOB,
            constitutionFemale: this.state.constitutionFemale,
            heightFemale: this.state.heightFemale,
            eyesColourFemale: this.state.eyesColourFemale,
            hairFemale:this.state.hairFemale,
            tattoosFemale: this.state.tattoosFemale,
            piercingFemale: this.state.piercingFemale,
            smokingFemale: this.state.smokingFemale,
            alcoholFemale: this.state.alcoholFemale,
            femaleDescription: this.state.femaleDescription
        }
        this.confirmAccount;
        this.props.registerUser(user, this.props.history);

    }
    getPickerValue = (value) => {
        this.setState.maleDOB= value;
        this.setState.femaleDOB=value;
        
      }
    checkProfileType(e) {
        
        if (this.state.profileType === 'male') {
            alert("Merge la barbat");
            this.setState({ show1: false, show2: true, show4:true})
        }
        else if (this.state.profileType === 'female') {
            alert('Merge si la femeie');
            this.setState({ show1: false, show3: true, show5: true })
        }
        else if(this.state.profileType ===''){
            alert("Please select a profile type");
        }
        else {
            alert('Merge si la cuplu');
            this.setState({ show1: false, show2: true, show7: true, show4:false  })
        }
    }

    finishRegister(e) {
        const userProfile= this.state.profileType;
        const maleDOB = this.state.maleDOB;
        const constitutionMale = this.state.constitutionMale;
        const height = this.state.heightMale;
        const eyesColourMale = this.state.eyesColourMale;
        const hairMale = this.state.hairMale;
        const tatoosMale = this.state.tatoosMale;
        const piercingMale = this.state.piercingMale;
        const smokingMale = this.state.smokingMale;
        const alcoholMale = this.state.alcoholMale;
        const maleDescription = this.state.maleDescription;
        const femaleDOB = this.state.femaleDOB
        const constitutionFemale = this.state.constitutionFemale
        const heightFemale = this.state.heightFemale
        const eyesColourFemale = this.state.eyesColourFemale
        const hairFemale = this.state.hairFemale
        const tattoosFemale = this.state.tattoosFemale
        const piercingFemale = this.state.piercingFemale
        const smokingFemale = this.state.smokingFemale
        const alcoholFemale = this.state.alcoholFemale
        const femaleDescription = this.state.femaleDescription
       
        if ((this.state.profileType === 'male') && (this.state = { show1: false })) {
            this.setState({ show1: false, show2: false, show4: false, show5: false, show6: true, show7: false })
            alert("Merge spre ultima pagina barbat");
            //doar pentru testare
            console.log(maleDOB, userProfile, constitutionMale, height,  eyesColourMale, tatoosMale, piercingMale, smokingMale, alcoholMale, maleDescription);
        }
        else if ((this.state.profileType === 'female') && (this.state = { show1: false })) {
            this.setState({ show1: false, show2: false, show3: false,  show4: false, show5: false, show6: true, show7: false })
            alert("Merge spre ultima pagina femeie");
            console.log(femaleDOB,
                constitutionFemale,
                heightFemale,
                eyesColourFemale,
                hairFemale,
                tattoosFemale,
                piercingFemale,
                smokingFemale,
                alcoholFemale,
                femaleDescription
                );
        }
        else {
            this.setState({ show1: false, show2:false, show3:false, show5: false, show4: false, show6: true })
            alert("Merge spre ultima pagina cuplu")
            console.log(maleDOB, userProfile, constitutionMale, height,  eyesColourMale, tatoosMale, piercingMale, smokingMale, alcoholMale, maleDescription);
            console.log(femaleDOB,
                constitutionFemale,
                heightFemale,
                eyesColourFemale,
                hairFemale,
                tattoosFemale,
                piercingFemale,
                smokingFemale,
                alcoholFemale,
                femaleDescription
                );
        }
    }
    coupleRegister(e){
        this.setState({ show2: false, show3: true, show7:false, show5: true })
            alert("Merge inregistrarea pentru cupluri")
    }

    confirmAccount = () => {
        this.props.history.push('/confirm')
    }
    componentWillUnmount() {
        this.props.clearError()
    }



    render() {
        var message = 'You selected ' + this.state.profileType;
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
                                                <form onSubmit={this.handleSubmit}>
                                                    {/* choose type of profile */}
                                                    {this.state.show1 && <Fragment>
                                                        <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Register:
                                                    
                                                        </h3>
                                                <hr className="hr-light" />
                                                
                                                    <MDBInputGroup
                                                        textClassName="red lighten-3"
                                                        containerClassName="mb-3"
                                                        className="mb-3"
                                                        prepend="Profile type"
                                                        inputs={
                                                            <select required getValue={this.setState.profileType} name="profileType" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                <option value="DEFAULT" disabled>Choose...</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                                <option value="couple">Couple</option>
                                                            </select>
                                                        }
                                                    />
                                                   <p>{message}</p>

                                                    
                                                        <MDBBtn gradient="purple" className="float-right" onClick={this.checkProfileType}>
                                                            Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                        </MDBBtn>
                                                    </Fragment>}
                                                    {/* form for him */}
                                                    {this.state.show2 && <Fragment>
                                                        <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Male Profile:
                                                        </h3>
                                                        <hr className="hr-light" />
                                                        <p>Date of birth</p>
                                                        <MDBDatePicker  containerClassName="mb-3" onChange={this.handleInputChange} className="browser-default custom-select"  name="maleDOB" format="M / D/YY" getValue={this.getPickerValue} />
                                                        <MDBInputGroup
                                                        
                                                            //containerClassName="mb-3"
                                                            prepend="Constitutie"
                                                            inputs={
                                                                <select required name="constitutionMale" getValue={this.setState.constitutionMale} defaultValue={'DEFAULT'}  onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Fat">Fat</option>
                                                                    <option value="Athletic">Athletic</option>
                                                                    <option value="Skinny">Skinny</option>
                                                                </select>

                                                            }


                                                        />
                                                        <MDBInput
                                                            required name="heightMale" label="Inatimea in cm" type="number" pattern="[0-9]*" onChange={this.handleInputChange} value={this.setState.heightMale}
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Eyes colour"
                                                            inputs={
                                                                <select required name="eyesColourMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="hairMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="tatoosMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="piercingMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="smokingMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Occasional">Occasional</option>
                                                                    <option value="Rarely">Rarely</option>
                                                                    <option value="Yes">Yes</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Alcohol"
                                                            inputs={
                                                                <select required name="alcoholMale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Social">Social drinker</option>
                                                                    <option value="Moderate">Moderate drinker</option>
                                                                    <option value="Heavy">Heavy drinker</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInput required name="maleDescription" type="textarea" rows="2" maxLength="200" onChange={this.handleInputChange} label="Your description" outline />
                                                    </Fragment>}
                                                    {this.state.show4 && <MDBBtn gradient="purple" className="float-right"  onClick={this.finishRegister}>
                                                        Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                    </MDBBtn>}
                                                    {this.state.show7 && <MDBBtn gradient="purple" className="float-right"  onClick={this.coupleRegister}>
                                                        Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                    </MDBBtn>}
                                    
                                                    {this.state.show3 && <Fragment>
                                                        <h3 className="text-center">
                                                    <MDBIcon icon="user" /> Female Profile:
                                                        </h3>
                                                        <hr className="hr-light" />
                                                        <p>Date of birth</p>
                                                        <MDBDatePicker containerClassName="mb-3" onChange={this.handleInputChange} className="browser-default custom-select" name="femaleDOB" format="M / D/YY" getValue={this.getPickerValue} />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Constitutie"
                                                            inputs={
                                                                <select required name="constitutionFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="Fat">Fat</option>
                                                                    <option value="Athletic">Athletic</option>
                                                                    <option value="Skinny">Skinny</option>
                                                                </select>

                                                            }
                                                        />
                                                        <MDBInput
                                                            required name="heightFemale" label="Inatimea in cm" type="number" pattern="[0-9]*" onChange={this.handleInputChange} value={this.setState.heightFemale}
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            prepend="Eyes colour"
                                                            inputs={
                                                                <select required name="eyesColourFemale"defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="hairFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="tattoosFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="piercingFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
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
                                                                <select required name="smokingFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Occasional">Occasional</option>
                                                                    <option value="Rarely">Rarely</option>
                                                                    <option value="Yes">Yes</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInputGroup
                                                            containerClassName="mb-3"
                                                            className="mb-3"
                                                            prepend="Alcohol"
                                                            inputs={
                                                                <select required name="alcoholFemale" defaultValue={'DEFAULT'} onChange={this.handleInputChange} className="browser-default custom-select">
                                                                    <option value="DEFAULT" disabled>Choose...</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Social">Social drinker</option>
                                                                    <option value="Moderate">Moderate drinker</option>
                                                                    <option value="Heavy">Heavy drinker</option>
                                                                </select>
                                                            }
                                                        />
                                                        <MDBInput name="femaleDescription" type="textarea" rows="2" maxLength="200" onChange={this.handleInputChange} label="Your description" outline />
                                                    </Fragment>}
                                                    {this.state.show5 && <MDBBtn gradient="purple" className="float-right" type="submit" value="Submit" onClick={this.finishRegister}>
                                                        Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                    </MDBBtn>}
                                                    {/* {this.state.show5 && <MDBBtn gradient="purple" className="float-right" type="submit" value="Submit" onClick={this.coupleRegister}>
                                                        Next <MDBIcon icon="angle-double-right" className="ml-1" />
                                                    </MDBBtn>} */}
                                                    {this.state.show6 && <Fragment>
                                                        <MDBInput
                                                            className="white-text"
                                                            iconClass="white-text"
                                                            label="Your email"
                                                            icon="envelope"
                                                            name="email"
                                                            onChange={this.handleInputChange}
                                                            value={this.state.email}
                                                        />
                                                        <MDBInput
                                                            className="white-text"
                                                            iconClass="white-text"
                                                            label="Your password"
                                                            icon="lock"
                                                            type="password"
                                                            name="password"
                                                            onChange={this.handleInputChange}
                                                            value={this.state.password}
                                                        />
                                                        <MDBInput
                                                            className="white-text"
                                                            iconClass="white-text"
                                                            label="Verify password"
                                                            icon="lock"
                                                            type="password"
                                                            name="verifyPassword"
                                                            onChange={this.handleInputChange}
                                                            value={this.state.verifyPassword}
                                                        />
                                                        <div className="text-center mt-4 black-text">
                                                            <MDBBtn type="submit" color="indigo">Sign Up</MDBBtn>
                                                            {this.props.errors ? <p style={{ color: 'red' }}>{this.props.errors.errorMessage}</p> : null}

                                                            <hr className="hr-light" />
                                                            <div className="text-center d-flex justify-content-center white-label">
                                                                <Link to="/login" className="p-2 m-2">
                                                                    <h6 className="text-center">
                                                                        Already have an account?
                                                        </h6>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </Fragment>}
                                                    
                                                </form>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>}


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