import React from 'react'
import{Row,Col, Container} from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";
function Section4() {
  return (
    <>
   <section className='promotion_section'>
<Container>
  <Row className='align-items-center'>
    <Col lg={6} className='text-center mb-5 mb-lg-0'>
    <img src={PromotionImage} className='img-fluid' alt='Promotion'/>
    </Col>
    <Col lg={6} className='px-5'>
    <h2>Nothing Brings People Together like a good Burger</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius minus hic explicabo dolore temporibus! Aliquam repudiandae, nam tenetur inventore assumenda asperiores. Inventore vero enim, doloribus magni dignissimos quo quam dolorum ut minus, cum libero molestias soluta dicta aliquid officia!
    </p>
    <ul>
      <li>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos officiis possimus ea voluptates, eligendi provident tempora minima ex numquam modi.</p>
      </li>
      <li>
        <p> Minus, quisquam, aperiam vel suscipit eos similique veritatis debitis asperiores non earum officiis odio ipsa cupiditate facere! Doloremque, quisquam enim molestiae molestias laborum voluptatum aut magni iure consectetur optio ullam vero libero!</p>
      </li>
    </ul>
    </Col>
  </Row>
</Container>
   </section>
  {/* //  {paralle effect} */}
  <section className='parallel_scroll'></section>
 </> )
}

export default Section4
