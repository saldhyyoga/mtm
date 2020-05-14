import React, { Component } from 'react';
import { Col,Card,CardHeader,CardBody,Badge } from 'reactstrap';
import TabProfile from './TabProfile';


import avatar from '../../assets/img/avatarr.png';

const styleAvatar = {
    height: 150,
    width: 150,
    marginBottom: 10
}

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile Details</h2>
        <div style={{display:'flex', flexDirection:'row'}}>
            <Col xs="12" sm="6" md="4" style={{marginLeft:'-13px'}}>
                <Card>
                <CardHeader style={{color:'#20a8d8', fontWeight:'bold'}}>
                    Trader Forever ( tradereatsleep )
                </CardHeader>
                <CardBody>
                    <center><div><img src={avatar} style={styleAvatar} alt="avatar" /></div></center>
                    <center><Badge color="primary">traderforever@gmail.com</Badge></center>
                </CardBody>
                </Card>
            </Col>
            <TabProfile />
        </div>
      </div>
    )
  }
}

export default Profile;