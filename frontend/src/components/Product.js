import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 mx-3 py-3 px-3 rounded'>
      <Card.Img src={product.image} variant='top' />

      <Card.Body>
        {/* <a href={`/product/${product._id}`}> */}
        <Card.Title as='div'>
          <b>{product.name}</b>
        </Card.Title>
        {/* </a> */}
        <Row>
          <Col>
            <Card.Text as='div' className='flipkart_div'>
              <div className='my-3'>
                <img
                  className='flipkart'
                  src='../images/Flipkart.png'
                  alt='Flipkart Symbol'
                />
                <p>Flipkart</p>
              </div>
              <Card.Text as='p'>₹{product.price}</Card.Text>
            </Card.Text>
          </Col>
          <Col>
            <Card.Text as='div' className='flipkart_div'>
              <div className='my-3'>
                <img
                  className='amazon'
                  src='../images/Amazon.jpg'
                  alt='Amazon Symbol'
                />
                <p>Amazon</p>
              </div>
              <Card.Text as='p'>₹{product.price}</Card.Text>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Product
