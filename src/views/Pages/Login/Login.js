import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email: "",
       password: "",
       errors: {}
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  success = () => {
    toast.success("Successfull Login", {
      onClose: () => window.location.href="/",
      autoClose: 2000
    })
  }

  error = () => {
    toast.error("Email or password is wrong!!",{
      autoClose: 2000
    })
  }

  onSubmit = async e => {
    e.preventDefault();

    if (this.state.email ==='admin@gmail.com' && this.state.password === 'admin'){
      this.success()
      Cookies.set('login','true')
      Cookies.set('authToken', 'kngspkgnagonasfgpo')
    } else {
      this.error()
      this.setState({
        email: '',
        password: ''
      })
    }
  };

  
  render() {
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
        <ToastContainer position={toast.POSITION.TOP_RIGHT}/>
          <Row className="justify-content-center">
            <Col md="8">
              <div style={{
                height: 400,
                width: 800,
                backgroundColor: 'white',
                display:'flex',
                flexDirection:'row'
              }}>
                <div >
                <Card className="p-4" style={{width: 350, height: 400, border: 'none'}}>
                  
                  <CardBody style={{height: 400}}>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                         placeholder="Email"
                         name="email"
                         value={this.state.email}
                         onChange={this.onChange} 
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                        placeholder="Username"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}  />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                </div>
                <div className="login" style={{
                  height:400,
                  width:450,
                  backgroundImage: 'linear-gradient(#ff00ff,#11a6df)',
                  clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 59% 100%)',
                  textAlign: 'right',
                  color: 'white'
                }}>
                  <div style={{
                    marginTop: 40,
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginRight: 20
                  }}>Welcome Back</div>
                  <div style={{fontSize: 30,
                    fontWeight: 'bold', marginRight: 20}}>Admin!</div>
                  <div style={{
                    fontSize: 14,
                    marginRight: 8
                  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
              </div>
              {/* <CardGroup style={{width:800}}>
                <Card className="p-4">
                  
                  <CardBody style={{height: 400}}>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                         placeholder="Email"
                         name="email"
                         value={this.state.email}
                         onChange={this.onChange} 
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                        placeholder="Username"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}  />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%',
              clipPath: 'polygon(40% 0, 100% 0%, 100% 100%, 86% 100%)' }}>
                  <CardBody className="text-center">
                  <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                         placeholder="Email"
                         name="email"
                         value={this.state.email}
                         onChange={this.onChange} 
                         />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"
                        placeholder="Username"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}  />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
