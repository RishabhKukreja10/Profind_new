import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom'

const HomeScreen = () => {
  const location = useLocation()

  useEffect(() => {
    // console.log(location.state); // result: 'some_value'
  }, [location])
  return (
    <>
      <h1>Top Recommended Products</h1>
      <p>Showing 1 – 24 of 378 results for "iphone 12"</p>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product className='mx-3' product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
