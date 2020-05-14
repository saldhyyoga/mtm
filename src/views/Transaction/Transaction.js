import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Input, Label } from 'reactstrap';

import CardNumberData from './CardNumberData';

export default class CardNumber extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tipe: 'id',
             valueforsearch: '',
             data: CardNumberData
        }
    }
    
    handleChange = (e) => this.setState({ valueforsearch: e.target.value})
    changeTypeFilter = e => this.setState({tipe: e.target.value})

    filterCardNumberData = () => {
        const cardnumber = this.state.data
        if(cardnumber && cardnumber.length > 0){
            switch(this.state.tipe){
                case "id":
                    return cardnumber.filter(
                        data => data.id.toLowerCase().includes(this.state.valueforsearch.toLowerCase())
                    )
                case "partner":
                    return cardnumber.filter(
                        data => data.partner.toLowerCase().includes(this.state.valueforsearch.toLowerCase())
                    )
                default:
                    return cardnumber;
            }
        } else {
            return [];
        }
    }
    
    render() {
        console.log(this.state.tipe)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Card Number Transaction
                            </CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2}>Filter By</Label>
                                    <Col>
                                    <Input type="select" name="select" id="exampleSelect"
                                    onChange={this.changeTypeFilter} style={{
                                        marginLeft: -100,
                                        width: 200
                                    }}
                                    >
                                        <option value="id" defaultValue>Partner Id</option>
                                        <option value="partner">Partner Name</option>
                                    </Input>
                                    
                                    </Col>
                                    <Col>
                                    <Input type="text" name="valueforsearch" id="partner" style={{
                                        width: 200,
                                        marginLeft: -320,
                                    }}
                                    value={this.state.valueforsearch}
                                    onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <Table responsive hover>
                                <thead className="thead-light">
                                  <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Partner</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.filterCardNumberData().map((entry,index) => (
                                        <tr key={index}>
                                            <th scope="row">{entry.id}</th>
                                            <td>{entry.partner}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
