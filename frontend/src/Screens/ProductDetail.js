import '../index.css'
import { Container, Row, Col,Button } from 'react-bootstrap'   
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state;
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const [keyword, setKeyword] = useState('');
    const [comments, setComment] = useState()
    const [user, setUser] = useState();
    async function funforfetch() {
        const config = { headers: { 'Content-Type': 'application/json' ,Authorization: `Bearer ${userInfo.token}` ,userId: JSON.parse(localStorage.getItem("userInfo"))._id, amazonUrl: product.amazonUrl} }
        const res = await axios.get("/api/comment", config);
        if (res.data.comments) { setComment(res.data.comments); }
        else setComment([])

        // console.log(res.data.comments);
    }

    async function handleClick_Wishlist(){
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
          image: product.image,
          amazonUrl: product.amazonUrl,
          flipkartUrl: product.flipkartUrl,
          amazonPrice: product.amazonPrice,
          flipkartPrice : product.flipkartPrice
          
        }
        const res = await axios.post("/api/wishlist", data,config);
      }

    useEffect(async() => {
        funforfetch();
        const config = { headers: { 'Content-Type': 'application/json' ,Authorization: `Bearer ${userInfo.token}` ,userId: JSON.parse(localStorage.getItem("userInfo"))._id} }
        try{
            const res = await axios.get("/api/users", config);
            // console.log(res);
            setUser(res.data.user)
        
            const configt = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${userInfo.token}`,
                },
              }
              console.log(userInfo.token)
              const data= {
                userId: JSON.parse(localStorage.getItem("userInfo"))._id,
                name: product.name,
                image: product.image,
                amazonUrl: product.amazonUrl,
                flipkartUrl: product.flipkartUrl,
                amazonPrice: product.amazonPrice,
                flipkartPrice : product.flipkartPrice
                
              }
              const rest = await axios.post("/api/addRecent", data,configt);

        }catch(err){
            console.log(err);
        }

    }, [])
    async function handleAddComment() {
        const config = { headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${userInfo.token}` ,userId: JSON.parse(localStorage.getItem("userInfo"))._id, } }
        var data = product;
        data.userId = JSON.parse(localStorage.getItem("userInfo"))._id;
        data.comment = keyword;
        document.getElementById("output").value = "";
        const res = await axios.post("/api/comment", data, config);
        
        funforfetch();
        
    }

    const handleDelete = async (id) => {
        setComment(undefined);
        try {
            const config = { headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${userInfo.token}`, commentid: id } }
            const response = await axios.delete('/api/comment', config)
            if (response) {
                funforfetch()
            }
        } catch (err) {
            console.log(err);
        }

    }


    
    return (
        <div className='contain_detail'>
            {
                comments && user ?
                    <Container  >
                        <Row>
                            
                            <Col md={5} xs={12}>
                                <div>
                                  <img src={product.image} className='product-card center' height="50%" width="230px" />
                               
                                </div>
                                <div >
                                    <button onClick={()=>handleClick_Wishlist()} className='center1 butnn bg-color1'><i className="fa-regular fa-heart" style={{marginRight:"10px"}}></i>Add To Wishlist</button>
                                </div>
                           </Col>
                            <Col md={7} xs={12}>
                                <div className='brandname' >{product.name}</div><hr></hr>
                                <Row>
                                    <Col className='text'>
                                        Key Specifications</Col>
                                    <Col>
                                        •4 GB RAM | 128 GB ROM | Expandable Upto 256 GB<br></br>
                                        •5000 mAh Battery<br></br>
                                        •64MP + 8MP + 2MP + 2MP | 16MP Front Camera<br></br>
                                        •5000 mAh Battery
                                        <br></br>
                                    </Col>
                                    <br></br>
                                    <hr></hr>
                                </Row>
                                <Row>
                                    <Col>
                                        <img src="../images/flipkart2.jpeg" height="45px" width="80px" /><br>
                                        </br><br></br>
                                        <img src="/images/amazon1.png" height="45px" width="80px" />
                                    </Col>
                                    <Col>₹{product.amazonPrice}
                                        <button type="button" class="btn btn-warning btn-sm" style={{marginLeft:"10px"}}>Go To Store</button><br></br>
                                        <br></br>

                                        ₹{product.flipkartPrice}<button type="button" class="btn btn-warning btn-sm" style={{marginLeft:"10px"}}>Go To Store</button>
                                    </Col>
                                    <br></br>
                                    <hr></hr>
                                    <br></br>
                                </Row>
                                {
                                    comments.map((data) => {
                                        // console.log(data);
                                        // console.log("came")
                                        return (
                                            <Row>
                                                <div className='style'>
                                                </div><br></br>
                                                <h6 className="h">{user.name}({data.date})</h6>
                                                <div class="card-columns">
                                                    <div class="card bg-light">
                                                        <div class="card-body " style={{display:"flex",flexDirection:"row"}}>
                                                            <div style={{width:"90% "}}>{data.comment}</div>
                                                            <div>
                                                                <img className="card-text cursor-hover" src='/images/bin.png' height="20px" onClick={() => handleDelete(data._id)} ></img>
                                                            </div>
                                                             </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        )
                                    })
                                }






                                <div>
                                    <br></br>
                                    <textarea id="output" onChange={(e) => setKeyword(e.target.value)} value={keyword} style={{width:"100%",height:"80px"}}>

                                    </textarea> <br />
                                    <Button onClick={() => handleAddComment()} className="btn btn-primary">Add Comment</Button>

                                </div>
                            </Col>


                        </Row>

                    </Container>
                    :
                    <h3>Loading</h3>
            }
        </div>
    );
}

export default ProductDetail;



//   {
//     comment.map(() => (
        // <Row>
        //     <div className='style'>
        //     </div><br></br>
        //     <h7 className="h">user4  (4 month ago)</h7>
        //     <div class="card-columns">
        //         <div class="card bg-light">
        //             <div class="card-body text-center">
        //                 <p class="card-text">{comment.comment}</p>
        //             </div>
        //         </div>
        //     </div>
        // </Row>
//     ))
// }