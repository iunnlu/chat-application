import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './chatViewStyle.scss';

const ChatView = ({ chatContent, currentUser }) => {
    const renderMessages = () => {
        if (chatContent === undefined) {
            return <div></div>
        } else {
            return chatContent.map(i => {
                return i.parts.map(s => {
                    if(currentUser.id === i.senderId){
                        return(<div style={{textAlign:"right"}}>
                            <p className="single-message-box" id="message-user">
                                {s.payload.content}
                            </p>
                        </div>)
                    }else{
                        return(<div style={{textAlign:"left"}}>
                            <p className="single-message-box">
                                <span style={{fontSize:"14px", fontWeight:"bold"}}>{i.senderId}</span><br />
                                {s.payload.content}
                            </p>
                        </div>)
                    }
                })
            })
        }
    }
    return (
        <Row className="chat-view">
            <Col>
                {renderMessages()}
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        chatContent: state.chatContent,
        currentUser: state.loginUser.currentUser
    }
}

export default connect(mapStateToProps)(ChatView)