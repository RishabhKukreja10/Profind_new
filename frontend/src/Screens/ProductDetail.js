import '../index.css'
import { Container, Row, Col } from 'react-bootstrap'
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
    const [yourComments, setyourComment] = useState();
    const [othersComments, setOthersComment] = useState()
    const [user, setUser] = useState();
    async function funforfetch() {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}`, userId: JSON.parse(localStorage.getItem("userInfo"))._id, amazonUrl: product.amazonLink } }
        const res = await axios.get("/api/comment", config);
        console.log(res.data);
        setyourComment(res.data.yourComments);
        setOthersComment(res.data.othersComments)

        // console.log(res.data.comments);
    }
    useEffect(async () => {
        funforfetch();
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}`, userId: JSON.parse(localStorage.getItem("userInfo"))._id } }
        try {
            const res = await axios.get("/api/users", config);
            // console.log(res);
            setUser(res.data.user)
        } catch (err) {
            console.log(err);
        }

    }, [])
    async function handleAddComment() {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}`, userId: JSON.parse(localStorage.getItem("userInfo"))._id, } }
        var data = product;
        data.userId = JSON.parse(localStorage.getItem("userInfo"))._id;
        data.comment = keyword;
        const res = await axios.post("/api/comment", data, config);
        funforfetch();
    }
    const handleDelete = async (id) => {
        setyourComment(undefined);
        try {
            const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}`, commentid: id } }
            const response = await axios.delete('/api/comment', config)
            if (response) {
                funforfetch()
            }
        } catch (err) {
            console.log(err);
        }

    }


    return (
        <>
            {
                yourComments && othersComments && user ?
                    <Container>
                        <Row>
                            <Col md={5}>
                                <img src="/images/iphone12.jpg" className='product-card' height="400px" width="230px" />
                                <div>
                                    <button className='butnn'><img src="/images/wishlist.png" height="30px" width="20px" />  Wishlist</button>

                                </div>
                            </Col>
                            <Col md={7}>
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
                                        <img src="/images/Flipkart.png" height="40px" width="65px" /><br>
                                        </br><br></br>
                                        <img src="/images/Amazon.jpg" height="40px" width="65px" />
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
                                    yourComments.map((data) => {
                                        // console.log(data);
                                        // console.log("came")
                                        return (
                                            <Row>
                                                <div className='style'>
                                                </div><br></br>
                                                <h7 className="h">{user.name}({data.date})</h7>
                                                <div className="card-columns">
                                                    <div className="card bg-light">
                                                        <div className="card-body text-center">
                                                            <span >{data.comment}</span>
                                                            <img className="card-text" src='/images/bin.png' onClick={() => handleDelete(data._id)}></img>
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

                                {
                                    othersComments.map((data) => {
                                        // console.log(data);
                                        // console.log("came")
                                        return (
                                            <Row>
                                                <div className='style'>
                                                </div><br></br>
                                                <h7 className="h">{user.name}({data.date})</h7>
                                                <div className="card-columns">
                                                    <div className="card bg-light">
                                                        <div className="card-body text-center">
                                                            <span >{data.comment}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        )
                                    })
                                }
                            </Col>


                        </Row>

                    </Container>
                    :
                    <h3>Loading</h3>
            }
        </>
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