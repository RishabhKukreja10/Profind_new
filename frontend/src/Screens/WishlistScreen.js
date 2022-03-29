import '../index'
import wish from './phone.jpg'
import delet from './delete.png'
import site from './flip.png'
import sites from './Amazon.png'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
const WishlistScreen= () => {
    return (
         <Container>
<div class="row">
    <div class="col-2">
   
    </div>
    <div class="col-2">
     <img src={wish} className='product-card-img' height="170px" width="100px" />
    </div>
    <div class="col-6">
      Iphone 12 (128Gb) Model- 2022<br></br>
      ₹89,999<br></br>
      
    
      <img src={site} height="65px" width="95px" />
    </div>
    
    <div class="col-2">
      <img src={delet} height="27px" width="34px" />
    </div>
    <hr></hr>
       <div class="col-2">
   
    </div>
    <div class="col-2">
     <img src={wish} className='product-card-img' height="170px" width="100px" />
    </div>
    <div class="col-6">
      Iphone 12 (128Gb) Model- 2022<br></br>
      ₹89,999<br></br>
      <br></br>
    
      <img src={sites} height="25px" width="90px" />
    </div>
    
    <div class="col-2">
      <img src={delet} height="27px" width="34px" />
    </div>
    <hr></hr>

    
  </div>
  
     </Container>
    );
}

export default WishlistScreen; 