import React from 'react'
import{Row,Col, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
 <> <section id='about' className='about_section'>

<Container>
  <Row>
    <Col lg={{span:8,offset:2}} className='text-center'>
<h2>The Burger tastes better when you eat with your family</h2>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, suscipit rerum! Iusto recusandae, adipisci quia voluptatibus inventore illum repudiandae consectetur dolores asperiores dignissimos necessitatibus reiciendis nostrum, nisi velit fuga numquam quo error tenetur nesciunt, fugit molestiae soluta sunt! Mollitia autem sed dicta enim blanditiis ducimus omnis corrupti velit! Amet, recusandae.</p>
<Link to="/" className='btn_red'>
Explore full menu
</Link>
    </Col>
  </Row>
</Container>

   </section>
   <section className='about_wrapper'>
    <Container>
      <Row className='justify-content-md-center'>{
        mockData.map((cardData,index)=>(
        <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
          <div className='about_box text-center'>
            <div className='about_icon'>
              <img src={cardData.image} className='img-fluid ' alt="icon"/>
            </div>
            <h4>{cardData.title}</h4>
            <p> {cardData.paragraph}</p>
          </div>
        </Col>







        ))}

      </Row>
    </Container>
   </section>

</>
  )
}

export default Section2
