import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Card} from 'react-bootstrap';
import ProfileView from './ProfileView';
import RoomsView from './RoomsView';
import ChatView from './ChatView';
import './homeStyle.scss'
import WriteMessageView from './WriteMessageView';

class Home extends React.Component{
    render(){
        return(
            <Card className="home-card">
                <Card.Header><h6>Chat Home</h6></Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col className="col-5">
                                <ProfileView />
                                <RoomsView />
                            </Col>
                            <Col className="col-7">
                                <ChatView />
                                <WriteMessageView />
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return{
        currentUser: state.loginUser.currentUser
    }
}

export default connect(mapStateToProps)(Home);