import React from 'react';
import {
Col,
Card,
CardBody,
Form,
FormGroup,
InputGroup,
Input,
InputGroupAddon,
InputGroupText,
Button
} from 'reactstrap';

const text = {
    marginTop: 5,
    marginRight: 10,
    fontWeight: 'bold',
    width: 150
}

export default function ChangePassword() {
    return (
      <Col>
        <Card style={{border:'none'}}>
          <CardBody>
            <Form action="" method="post">
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div style={text}>Current Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" id="currentpassword" name="currentpassword" placeholder="Current Password" autoComplete="name"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>New Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" id="newpassword" name="newpassword" placeholder="New Password" autoComplete="new password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Retype New Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input type="password" id="password1" name="password1" placeholder="Retype New Password" autoComplete="current-password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup className="form-actions">
                <center><Button type="submit" size="xl" color="success"><i class="icon-note"></i> Change Password</Button></center>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    
    )
}
