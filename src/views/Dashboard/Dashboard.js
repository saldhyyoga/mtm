import React, { Component } from 'react';
import {
  Col,
  Row,
  Spinner
} from 'reactstrap';
import Widget02 from '../Widgets/Widget02'


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <Spinner color="primary" />

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Widget02 header="123 Transaction" mainText="Card Number Transaction" icon="fa fa-credit-card" color="primary" footer link="#/transaction/card-number" />
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Widget02 header="452" mainText="Pending Transaction" icon="fa fa-exclamation-triangle" color="warning" footer link="#/transaction/card-pending" />
          </Col>
          <Col xs="12" sm="6" lg="4">
            <Widget02 header="250" mainText="Failed Transaction" icon="fa fa-trash" color="danger" footer link="#/transaction/card-failed" />
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;
