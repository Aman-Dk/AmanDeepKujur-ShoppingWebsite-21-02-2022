import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Categories from './Categories'
import NewHeader from './NewHeader'

export default function Cart() {
  return (
    <div>
    <NewHeader />
    <Container>
        <Row>
        <Col sm={2}>
            <Categories/>
        </Col>
        <Col sm={8}>
            <div>
                <h1>This is Cart Page</h1>
            </div>
        </Col>
        </Row>
    </Container>
    </div>
  )
}
