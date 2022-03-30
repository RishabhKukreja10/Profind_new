import axios from 'axios'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
  const navigate = useNavigate()
  async function handleClick(){
    const config = { headers: { 'Content-Type': 'application/json'} }
    const data= {
      userId: JSON.parse(localStorage.getItem("userInfo"))._id,
      name: product.name,
      image: product.productImage,
      amazonUrl: product.amazonLink,
      flipkartUrl: product.flipkartLink,
      amazonPrice: product.amazonPrice,
      flipkartPrice : product.flipkartPrice
    }
    const res = await axios.post("/api/wishlist", data,config);
  }
  async function handleNavigate(){
    navigate(`/productDetail/${product.name}`, { state: product })
  }
  return (
    // <Link to={`/productDetail/${product.name}`}>
      <Card className='my-3 mx-3 py-3 px-3 rounded' onClick={()=>handleNavigate()}>
      <div id='wishlistSetting'><img src='/images/wishlist.png' onClick={()=>handleClick()}/></div>
      <Card.Img src={product.productImage} variant='top' />

      <Card.Body>
        {/* <a href={`/product/${product._id}`}> */}
        <Card.Title as='div'>
          <b>{product.name}</b>
        </Card.Title>
        {/* </a> */}
        <Row>
          <Col>
            <a href={product.flipkartLink} target='_blank'>
              <Card.Text as='div' className='flipkart_div'>
                <div className='my-3'>
                  <img
                    className='flipkart'
                    src='../images/Flipkart.png'
                    alt='Flipkart Symbol'
                  />
                  <p>Flipkart</p>
                </div>
                <Card.Text as='p'>₹{product.flipkartPrice}</Card.Text>
              </Card.Text>
            </a>
          </Col>
          <Col>
            <a href={product.amazonLink} target='_blank'>
              <Card.Text as='div' className='flipkart_div'>
                <div className='my-3'>
                  <img
                    className='amazon'
                    src='../images/Amazon.jpg'
                    alt='Amazon Symbol'
                  />
                  <p>Amazon</p>
                </div>
                <Card.Text as='p'>₹{product.amazonPrice}</Card.Text>
              </Card.Text>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    // </Link>
  )
}

export default Product
