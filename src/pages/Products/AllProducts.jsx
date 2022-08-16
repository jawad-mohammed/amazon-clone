import React from 'react'
import Books from './Books';
import Electronics from './Electronics';
import Fashion from './Fashion';
import Kids from './Kids';
import Mobile from './Mobiles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AllProducts = () => {
  
    return (
    <>
<Container>

<Row>
        <Col><Books/></Col>
        <Col><Electronics/></Col>
        <Col><Fashion/></Col>
      </Row>
      <Row>
        <Col><Kids/></Col>
        <Col><Mobile/></Col>
        <Col><Mobile/></Col>
      </Row>
    </Container>










    </>
  )
}

export default AllProducts
