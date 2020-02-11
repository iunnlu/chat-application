import React, { useState } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { chatContent } from '../../../actions/chatContent';
import { connect } from 'react-redux';
import './roomsStyle.scss';

const RoomsView = ({ currentUser, chatContent }) => {
    const enterRoom = (id) => {
        chatContent(id);
    }
    const renderRooms = () => {
        return currentUser.rooms.map((item, index) => {
            return (
                <ListGroup.Item
                    style={index === 0
                        ? { borderTop: "1px solid black", textAlign: "center", cursor: "pointer", color: "#337ab7" }
                        : { textAlign: "center", cursor: "pointer", color: "#337ab7" }
                    }
                    onClick={() => enterRoom(item.id)}
                >
                    <a className="room-button">{item.name}</a>
                </ListGroup.Item>
            )
        })
    }
    return (
        <Row style={{ marginTop: "10px" }}>
            <Col>
                <ListGroup variant="flush">
                    {renderRooms()}
                </ListGroup>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.loginUser.currentUser
    }
}

export default connect(mapStateToProps, { chatContent })(RoomsView);