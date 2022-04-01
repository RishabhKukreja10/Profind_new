import axios from 'axios'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Product = ({ product }) => {
  //console.log(product);
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
    //console.log(userInfo.token)
    const data= {
      userId: JSON.parse(localStorage.getItem("userInfo"))._id,
      name: product.name,
      image: product.image,
      amazonUrl: product.amazonUrl,
      flipkartUrl: product.flipkartUrl,
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
    <div id='wishlistSetting'><i className="fa-regular fa-heart cursor-hover" onClick={()=>handleClick()}></i> </div>
    
      <div onClick={()=>handleNavigate()} className="cursor-hover">
        <Card.Img src={product.image} variant='top' />
      </div>
        <Card.Body>
          {/* <a href={`/product/${product._id}`}> */}
          <Card.Title as='div'>
            <b>{product.name}</b>
        </Card.Title>
          {/* </a> */}
          <Row>
            <Col>
              <a href={product.flipkartUrl} target='_blank' >
                <Card.Text as='div' className='flipkart_div'>
                  <div className='my-3'>
                    <img
                      className='flipkart'
                      src='../images/flip.png'
                      alt='Flipkart Symbol'
                      style={{height:"45px",width:"100%"}}
                    />
                    
                  </div>
                  <Card.Text as='p'>₹{product.flipkartPrice}</Card.Text>
                </Card.Text>
              </a>
            </Col>
            <Col>
              <a href={product.amazonUrl} target='_blank' >
                <Card.Text as='div' className='flipkart_div'>
                  <div className='my-3'>
                    <img
                      className='amazon'
                      src='../images/amazon3.png'
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
