import '../index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state;
    // console.log(product);
    const [keyword, setKeyword] = useState('');
    const [comments, setComment] = useState()
    useEffect(() => {
        async function funforfetch() {
            const config = { headers: { 'Content-Type': 'application/json', userId: JSON.parse(localStorage.getItem("userInfo"))._id, amazonUrl: product.amazonLink } }
            const res = await axios.get("/api/comment", config);
            if (res.data.comments) { setComment(res.data.comments); }
            else setComment([])
            // console.log(res.data.comments);
        }
        funforfetch();
    }, [])
    async function handleAddComment() {
        const config = { headers: { 'Content-Type': 'application/json', userId: JSON.parse(localStorage.getItem("userInfo"))._id, } }
        var data = product;
        data.userId = JSON.parse(localStorage.getItem("userInfo"))._id;
        data.comment = keyword;
        const res = await axios.post("/api/comment", data, config);
        async function funforfetch() {
            const config = { headers: { 'Content-Type': 'application/json', userId: JSON.parse(localStorage.getItem("userInfo"))._id, amazonUrl: product.amazonLink } }
            const res = await axios.get("/api/comment", config);
            if (res.data.comments) { setComment(res.data.comments); }
            else setComment([])
            // console.log(res.data.comments);
        }

        funforfetch();

        // console.log(res);
    }

    
    return (
        <div className='contain_detail'>
            {
                comments ?
                    <Container  >
                        <Row>
                            
                            <Col md={5} xs={12}>
                                <div>
                                  <img src={product.productImage} className='product-card center' height="50%" width="230px" />
                               
                                </div>
                                <div>
                                    <button className='center1 butnn btn-warning'><img src="/images/wishlist.png" height="50%" width="30px" />Add To Wishlist</button>
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
                                        <button type="button" class="btn btn-warning btn-sm">Go To Store</button><br></br>
                                        <br></br>

                                        ₹{product.flipkartPrice}<button type="button" class="btn btn-warning btn-sm">Go To Store</button>
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
                                                <h7 className="h">user4  (4 month ago)</h7>
                                                <div class="card-columns">
                                                    <div class="card bg-light">
                                                        <div class="card-body text-center">
                                                            <p class="card-text">{data.comment}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        )
                                    })
                                }






                                <div>
                                    <br></br>
                                    <textarea onChange={(e) => setKeyword(e.target.value)}>

                                    </textarea> <br />
                                    Add Comment
                                    <button type="button" onClick={() => handleAddComment()}> <img src="/images/plus.png" height="30" width="30" /></button>
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