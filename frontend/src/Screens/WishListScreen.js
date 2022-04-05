
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Row, Col,Button } from 'react-bootstrap'  
import Loader from '../components/Loader'
// import 'bootstrap/dist/css/bootstrap.css';
const WishlistScreen = () => {
  const navigate = useNavigate();
  const [wishlist, setWishList] = useState()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    console.log("Goingtttt")
    async function funforfetch() {
      console.log("hello");
      if(!userInfo)
      {
        navigate('/login')
      }
      const config = { headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${userInfo.token}`, userId: JSON.parse(localStorage.getItem("userInfo"))._id, } }
      console.log(userInfo.token)
       
          console.log("Going")
        const res = await axios.get("/api/wishlist", config);
        setWishList(res.data.response);
               
            
      // console.log(res.data.response);
    }
    funforfetch();
  }, [])
  async function handleDelete(id) {
    console.log(id);
    setWishList(undefined);
    try {
      const config = { headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${userInfo.token}`,  userId: JSON.parse(localStorage.getItem("userInfo"))._id, wishListid:id} }
      const response = await axios.delete('/api/wishlist', config)
      // console.log(response);
      if (response) {
        const res = await axios.get("/api/wishlist", config);
        setWishList(res.data.response);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='contain_detail'>
      {wishlist ?
        <Container>
          
          <Row className='p-4'>
            {wishlist.map((data) => (
              <>
                <Col sm={3} md={3} xs={6}>
            
                  <img src={data.image} classNameName='product-card-img' height="190px" width="70%" />
                </Col>
                <Col sm={7} md={7} xs={5}>
                  {data.name}<br></br><br></br>
                  
                  <img src="../images/flipkart2.jpeg" height="50px" width="80px" style={{marginRight:"25px"}}/>
                  <b style={{fontWeight:"1000"}}>₹{data.amazonPrice}</b><br></br> 
                  <a href={data.amazonLink}>
                    <img src="../images/amazon1.png" height="45px" width="85px" style={{marginRight:"10px"}}/>
                    <b style={{fontWeight:"1000"}}>₹{data.flipkartPrice}</b><br></br>
                  </a>
                </Col>
                <Col sm={2} md={2} xs={1}>
              
                 <i className="fa-solid fa-trash cursor-hover fa-xl"  onClick={() => handleDelete(data._id)}></i> 
                </Col>
               <hr></hr>
              </>
            ))}
 
          </Row>

        </Container>
        :

        <Loader />}
    </div>
  );
}

export default WishlistScreen;

