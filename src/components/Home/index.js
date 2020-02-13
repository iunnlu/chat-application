import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ChatkitProvider, TokenProvider, withChatkit } from '@pusher/chatkit-client-react';
import ProfileView from './ProfileView';
import RoomsView from './RoomsView';
import ChatView from './ChatView';
import './homeStyle.scss'
import WriteMessageView from './WriteMessageView';
import Deneme from './Deneme';
import firebase from '../../database/firebase';
import history from '../history';

class Home extends React.Component {
    LogOut = () => {
        firebase.auth().signOut().then(function () {
            history.push('/')
        }, function (error) {
            console.log(error)
        });
    }
    render() {
        const instanceLocator = this.props.userInfo.instanceLocator;
        const tokenProvider = new TokenProvider({
            url: this.props.userInfo.tokenProvider,
        });
        return (
            <ChatkitProvider
                instanceLocator={instanceLocator}
                tokenProvider={tokenProvider}
                userId={this.props.userInfo.username}
            >
                <Card className="home-card">
                    <Card.Header><h6>Chat Home</h6></Card.Header>
                    <Card.Body>
                        <Container>
                            <Deneme />
                            <Button onClick={this.LogOut}>Logout</Button>
                        </Container>
                    </Card.Body>
                </Card>
            </ChatkitProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.loginUser.userInfo
    }
}

export default connect(mapStateToProps)(Home);

/*
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
*/