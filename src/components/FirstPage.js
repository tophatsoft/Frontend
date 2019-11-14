import React from 'react';
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import sexy from '../images/sexy.jpg';




const FirstPage = () => {
    return (
        <MDBView src={sexy}>
            <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" className="mb-4 white-text text-center">
                            <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">Social app</h1>
                            <hr className="hr-light my-4" />
                            <h5 className="text-uppercase mb-4 white-text "><strong>Bine ati venit!</strong></h5>
                            <MDBBtn rounded outline color="white"><Link className="nav-link" to="/login" style={{ color: '#FFF' }}> Intra </Link></MDBBtn>
                            <MDBBtn rounded outline color="white"><Link className="nav-link" to="/register" style={{ color: '#FFF' }}> Inregistreaza-te </Link></MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBMask>
        </MDBView>
    )
}

export default FirstPage;