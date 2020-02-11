import React from 'react';
import { Container, Card, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import history from '../history'
import {loginUser} from '../../actions/loginUser';
import {connect} from 'react-redux';
import './loginStyle.scss'

class Login extends React.Component {
    state = {username: '', error: null}
    loginSubmit = (event) => {
        event.preventDefault();
        if(this.state.username === ''){

        }else{
            this.props.loginUser(this.state.username);
        }
    }
    usernameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    render() {
        return (
            <Card className="login-card">
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Container className="login-container">
                        <form onSubmit={this.loginSubmit}>
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="login-input" id="basic-addon1"><i class="fa fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            className="login-form-control"
                                            onChange={this.usernameChange}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 style={{color: "red", margin:"0px", position:"relative", top:"-10px"}}>{this.props.error}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="login-user-button">
                                        <button className="btn btn-info">Login</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col>
                                <p onClick={() => history.push('/create')} className="login-new-account">Create a new account</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        error: state.loginUser.error
    }
}

export default connect(mapStateToProps, {loginUser})(Login);