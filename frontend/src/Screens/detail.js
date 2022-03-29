import '../index.css'
import wish from './phone.jpg'
import cart from './cart.png' 
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import site from './flip.png'
import sites from './Amazon.png'
import plus from './plus.png'
import Card from 'react-bootstrap/Card' 
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, Button } from 'react-bootstrap' 

const Details= () => {
    return (
    <Container>
    <Row>
    <Col md={5}>
   <img src={wish} className='product-card' height="400px" width="230px" />
   <div>
 <button className='butnn'><img src={cart} height="30px" width="20px"/>  Wishlist</button> 
  
   </div>
    </Col>
    <Col md={7}>
       <div className='brandname' >POCO C31 (Royal Blue, 64 GB)  (4 GB RAM)</div><hr></hr>
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
                <img src={site} height="75px" width="95px" /><br>
                </br>
                  <img src={sites} height="35px" width="65px" />
              </Col>
              <Col>
       ₹ 19,999<button type="button" class="btn btn-warning btn-sm">Go To Store</button><br></br>
       <br></br>
       
             ₹ 22,999<button type="button" class="btn btn-warning btn-sm">Go To Store</button>
              </Col>
              <br></br>
                  <hr></hr>
                  <br></br>
          </Row>
          <Row>
              <div className='style'> 
              <h5><u>Comments</u></h5>
              
             </div><br></br>
         <h7 className="h">user1  (2 month ago)</h7>
              <div class="card-columns">
  <div class="card bg-light">
    <div class="card-body text-center">
        
      <p class="card-text">It is amazing product.Decent product at this price segment</p>
    </div>
  </div>

  </div>    
          </Row>
          <Row>
              <div className='style'> 
              
              
             </div><br></br>
         <h7 className="h">user2  (2 month ago)</h7>
              <div class="card-columns">
  <div class="card bg-light">
    <div class="card-body text-center">
        
      <p class="card-text">It is amazing product.Decent product at this price segment</p>
    </div>
  </div>

  </div>    
          </Row>
    <Row>
              <div className='style'> 
             
              
             </div><br></br>
         <h7 className="h" >user3  (3 month ago)</h7>
              <div class="card-columns">
  <div class="card bg-light">
    <div class="card-body text-center">
        
      <p class="card-text">It is amazing product.Decent product at this price segment</p>
    </div>
  </div>

  </div>    
          </Row>
              <Row>
              <div className='style'> 
             
              
             </div><br></br>
         <h7 className="h">user4  (4 month ago)</h7>
              <div class="card-columns">
  <div class="card bg-light">
    <div class="card-body text-center">
        
      <p class="card-text">It is amazing product.Decent product at this price segment.</p>
    </div>
  </div>

  </div>    
          </Row>
<div>
    <br></br>
    <LinkContainer to=''>
                <Nav.Link>
                
                  Add Comment
                <button type="button"> <img src={plus} height ="30" width="30" /></button>
    </Nav.Link>
              </LinkContainer>
</div>
    </Col>
    

</Row>

    </Container>
    );
}

export default Details; 