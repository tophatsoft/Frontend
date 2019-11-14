import React, { Component } from 'react';
import { MDBFileInput, MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserDetail } from '../../actions/account'


class AccountDetail extends Component {
    constructor() {
        super();
        this.state = {
            avatar: '',
            age: 0,
            gender: 'Male',
            location: ''

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        //update user with info, save picture in ..//..//../uploads

        console.log(this.state)
        console.log(this.props.accountDetail)

    }


    onClick = (gender) => () => {
        this.setState({
            gender: gender
        });
    }

    //saving avatar name on  db with photoname+userid
    fileSelectedHandler = event => {
        const fullImageName = event.target.files[0].name
        const imgName = fullImageName.split('.')

        this.setState({
            avatar: imgName[0] + "-" + this.props.accountDetail.user._id
        })
    }

    componentDidMount() {
        this.props.getUserDetail()
    }



    render() {
        return (
            <MDBContainer >
                <h1>Account Detail</h1>
                <form onSubmit={this.handleSubmit}>
                    <MDBCol className="mt-5">
                        <h3>Avatar:</h3>
                        <input

                            accept="image/jpeg, image/png"
                            type="file"
                            id="inputFile"
                            onChange={this.fileSelectedHandler}
                        // getValue={}
                        />
                    </MDBCol>

                    <MDBCol className="mt-5">

                        <h3>Age:</h3>
                        <MDBInput
                            value={this.state.age}
                            name="age"
                            onChange={this.handleInputChange}
                            type="number"
                        />




                    </MDBCol>
                    <MDBCol className="mt-5">

                        <h3>Location:</h3>
                        <MDBInput
                            value={this.state.location}
                            name="location"
                            onChange={this.handleInputChange}
                            type="text"
                        />




                    </MDBCol>
                    <MDBCol className="mt-5">
                        <h3>Sex:</h3>
                        <div className="form-check">
                            <MDBInput label
                                type="radio"
                                checked={this.state.gender === "Male" ? true : false}
                                onClick={this.onClick("Male")}
                                id="radio1"
                            >
                                Male
                </MDBInput>
                        </div>
                        <div className="form-check">
                            <MDBInput label
                                type="radio"
                                checked={this.state.gender === "Female" ? true : false}
                                onClick={this.onClick("Female")}
                                id="radio2"
                            >
                                Female
                </MDBInput>
                        </div>
                    </MDBCol>
                    <MDBCol className="mt-5">
                        <MDBBtn type="submit" color="blue">Save Changes</MDBBtn>

                    </MDBCol>

                </form>

            </MDBContainer>


        );
    }
}

AccountDetail.propTypes = {
    getUserDetail: PropTypes.func.isRequired,
    accountDetail: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    accountDetail: state.accountDetail
})


export default connect(mapStateToProps, { getUserDetail })(withRouter(AccountDetail));