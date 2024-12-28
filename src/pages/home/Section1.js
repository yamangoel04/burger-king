import React from 'react'
import{Row,Col, Container} from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from 'react-router-dom';
function Section1() {
  return (
   <section id='home'    className='hero_section'>
 <Container>
<Row>
   <Col lg={7} className='mb-5 mb-lg-0'>
<div className='position-relative'>
  <img src={Burger} className='img-fluid' alt='Hero'/>
  <div className='price_badge'>
    <div className='badge_text'>
      <h4 className='blue'>only</h4>
      <h4 className='blue1'>$6.99</h4>
    </div>
  </div>
</div>



</Col>
<Col lg={5}>
<div className='hero_text text-center'>
  <h1 className='white'>New Burger</h1>
  <h2 className='white'>With Onion</h2>
  <p className='white pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id, facere modi explicabo neque incidunt! Sed laudantium eligendi maiores placeat similique voluptas mollitia, rerum velit. Nobis fugit veritatis aliquid assumenda!</p>
  <Link to="/" className='order_now'>Order now</Link>
</div>
</Col>
</Row>
</Container>
   </section>
  )
}

export default Section1
