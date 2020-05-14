import React from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Card, CardBody,
    CardHeader, Form, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText, Button
    } from 'reactstrap';

const text = {
    marginTop: 5,
    marginRight: 10,
    fontWeight: 'bold',
    width: 150
}

export default function EditProfile() {
    return (
        
      <Col>
        <Card style={{border:'none'}}>
          <CardBody>
            <Form action="" method="post">
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div style={text}>Username <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-user"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input  type="text" id="username" name="username" placeholder="Username" autoComplete="name"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Email <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input disabled type="email" id="email" name="newpassword" placeholder="Email" autoComplete="new password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Phone <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-phone"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" id="password1" name="password1" placeholder="Retype New Password" autoComplete="current-password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Address <span style={{color:'red'}}>*</span></div>
                  </InputGroupAddon>
                  <Input type="textarea" id="address" name="address" placeholder="Address" autoComplete="current-password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup className="form-actions">
                <center><Button style={{marginTop:10}}  type="submit" size="md" color="success"> <i class="icon-note"></i> Edit Profile</Button></center>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    
    )
}
