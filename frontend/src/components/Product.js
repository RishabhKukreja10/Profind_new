import axios from 'axios'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Product = ({ product }) => {
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  async function handleClick(){
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    console.log(userInfo.token)
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
    <>
    <Card className='my-3 mx-3 py-3 px-3 rounded' >
    <div id='wishlistSetting'><img src='/images/wishlist.png' onClick={()=>handleClick()}/></div>
    
      <div onClick={()=>handleNavigate()}>
        <Card.Img src={product.productImage} variant='top' />
      </div>
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
                      src='../images/flipkart2.jpeg'
                      alt='Flipkart Symbol'
                      style={{height:"45px",width:"100%"}}
                    />
                    
                  </div>
                  <Card.Text as='p'>₹{product.flipkartPrice}</Card.Text>
                </Card.Text>
              </a>
            </Col>
            <Col>
              <a href={product.amazonLink} target='_blank' >
                <Card.Text as='div' className='flipkart_div'>
                  <div className='my-3'>
                    <img
                      className='amazon'
                      src='../images/amazon1.png'
                      alt='Amazon Symbol'
                      style={{height:"45px",width:"100%"}}
                    />
                    
                  </div>
                  <Card.Text as='p'>₹{product.amazonPrice}</Card.Text>
                </Card.Text>
              </a>
            </Col>
          </Row>
        </Card.Body>
      
      
    </Card>
   
    </>
      
    // </Link>
  )
}

export default Product
