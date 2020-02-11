import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Image} from 'react-bootstrap';

const ProfileView = ({currentUser}) => {
    return(
        <Row>
            <Col style={{padding:"0px 30px", display:"flex", justifyContent:"center"}}>
                <span style={{fontWeight:"bold", marginRight:"15px", display:"flex", alignItems:"center"}}>
                    <span style={{marginRight:"5px"}}>User Id: {currentUser.name}</span>
                    <Image style={{height:"50px", width:"50px"}} src="https://fi-homes.com/wp-content/uploads/2019/05/bay-icon.jpg" roundedCircle />
                </span>
                <i style={{cursor:"pointer", width:"15px", height:"15px"}} className="fa fa-cog"></i>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.loginUser.currentUser
    }
}

export default connect(mapStateToProps)(ProfileView);
