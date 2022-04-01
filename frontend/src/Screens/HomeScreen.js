import React, { useEffect,useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
const HomeScreen = () => {
  const location = useLocation()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [recents, setRecents] = useState([])
  const [user, setUser] = useState();
  useEffect(() => {
    // console.log(location.state); // result: 'some_value'

    

  }, [location])

  useEffect(()=>{
   // console.log(products);
    async function funforfetch() {
      const config = { headers: { 'Content-Type': 'application/json' ,Authorization: `Bearer ${userInfo.token}` ,userId: JSON.parse(localStorage.getItem("userInfo"))._id} }
      const res = await axios.get("/api/addRecent", config);
      //res.data.response.reverse();
      console.log(res.data.recents);
      if (res.data.recents) { setRecents(res.data.recents); }
      else setRecents([])
      
     // console.log(res.data.response);
     }
     funforfetch();
  },[])

  return (
    <>
    <div className='contain_detail'>
      <h1>Top Recommended Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product className='mx-3' product={product} />
          </Col>
        ))}
      </Row>
    </div>
    <br></br>
    <div>
      { recents.length!=0 ? 
      <>
        <h1>Recently Searched</h1>
        <Row>
          {recents.slice(0,4).map((pro) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product className='mx-3' product={pro.product} />
            </Col>
          ))}
        </Row>
      </>
      :""
      }
    </div>
   
    </>
    
  )
}

export default HomeScreen
