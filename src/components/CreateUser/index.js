import React from 'react';
import { Container, Row, InputGroup, FormControl, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUser';
import './createUserStyle.scss';

class CreateUser extends React.Component {
    state = { username: "", error: null }
    usernameChange = (event) => {
        this.setState({ username: event.target.value })
}
    createSubmit = (event) => {
        event.preventDefault()
        if(this.state.username === ""){
            this.setState({ error: "Please enter a username!" })
        }else{
            this.props.addUser(this.state.username)
        }
    }
    render() {
        return (
            <form onSubmit={this.createSubmit}>
                <Card className="create-user-card">
                    <Card.Header><h5>Create User</h5></Card.Header>
                    <Card.Body>
                        <Container className="create-user-container">
                            <Row>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="create-user-input" id="basic-addon1"><i class="fa fa-user"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            className="create-user-form-control"
                                            onChange = {this.usernameChange}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    { this.props.pushError != undefined
                                        ?   <h6 style={{color: "red", margin:"0px", position:"relative", top:"-10px"}}>{this.props.pushError}</h6>
                                        :   <h6 style={{color: "red", margin:"0px", position:"relative", top:"-10px"}}>{this.state.error}</h6>
                                    }
                                </Col>
                            </Row>
                            <div className="create-user-button">
                                <button className="btn btn-info">Create</button>
                            </div>
                        </Container>
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        username: state.createUser.username,
        pushError: state.createUser.error
    })
}

export default connect(mapStateToProps, { addUser })(CreateUser);
