import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Categories from './Categories'
import Product from './Product'

export default class Body extends Component {
  render() {
    return (
      // <div className='container'>
      //     <div className='row'>
      //       <div className='col-3'>
      //           <Categories/>
      //       </div>
      //       <div className='col'>
      //           <Product/>
      //       </div>
      //     </div>
      // </div>
      <Container>
        <Row>
          <Col sm={2}>
            <Categories/>
          </Col>
          <Col sm={8}>
            <Product/>
          </Col>
        </Row>
      </Container>
    )
  }
}
