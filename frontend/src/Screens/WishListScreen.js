
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
    <>
      {wishlist ?
        <Container>
          <div className="row">
            {wishlist.map((data) => (
              <>
                <div className="col-2">

                </div>
                <div className="col-2">
                  <img src={data.image} classNameName='product-card-img' height="170px" width="100px" />
                </div>
                <div className="col-6">
                  {data.name}<br></br>
                  
                  <img src="/images/Amazon.jpg" height="65px" width="95px" />
                  ₹{data.flipkartPrice}<br></br>
                  
                  <img src="/images/Flipkart.png" height="65px" width="95px" />
                  ₹{data.amazonPrice}<br></br>
                </div>


                <div className="col-2">
                  <button type="button" classNameName='btnn' onClick={() => handleDelete(data._id)}>   <img src="/images/bin.png" height="27px" width="34px" /> </button>
                </div>
                <hr></hr>
              </>
            ))}

          </div>

        </Container>
        :

        <h2>Loading</h2>}
    </>
  );
}

export default WishlistScreen;

