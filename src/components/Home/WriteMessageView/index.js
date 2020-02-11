import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import {writeMessage} from '../../../actions/writeMessage';
import {connect} from 'react-redux';
import './writeMessageViewStyle.scss'

const WriteMessageView = ({currentUser, selectedRoom, writeMessage}) => {
    const [message, setMessage] = useState("");
    const changeMessage = (event) => {
        setMessage(event.target.value)
    }
    const submitMessage = async (event) => {
        event.preventDefault();
        writeMessage(message);
    }
    return (
        <Row className="write-message-row">
            <Col style={{ padding: "0px" }}>
                <form onSubmit={submitMessage}>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            className="write-message-box"
                            onChange={changeMessage}
                            value={message}
                        />
                        <InputGroup.Append className="write-message-box-append">
                            <InputGroup.Text className="write-message-box-text">
                                <i onClick={submitMessage} className="fa fa-paper-plane" aria-hidden="true"></i>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.loginUser.currentUser,
        selectedRoom: state.selectedRoom.room
    }
}

export default connect(mapStateToProps, {writeMessage})(WriteMessageView);