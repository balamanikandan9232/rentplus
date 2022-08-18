import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import "./footer.css"

const quicklinks = [{
  path: "/about",
  display: "About"
},
{
  path: "*",
  display: "Privacy Policy"
},
{
  path: "/cars",
  display: "CarList"
},
{
  path: "/blog",
  display: "Blog"
},
{
  path: "/contact",
  display: "Contact"
}]


const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>Rent Plus <br />Service</span>
                </Link>
              </h1>
            </div>
            <p className='footer__logo__content'>
              Secure Your Car Hire Today. The Best Price Guaranteed. Book at Over 600 Locations. Search, Compare and Save Using the World's Biggest Online Car Rental Service
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className='mb-4'>
              <h5 className='footer__link__title'>Quick Links</h5>
              <ListGroup>
                {
                  quicklinks.map((item, index) => (
                    <ListGroupItem key={index} className="p-0 mt-3 quick__link" >
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className='mb-4'>
              <h5 className='footer__link__title mb-4'>Head Office</h5>
              <p className='office__info'>58A Katangulathur, Kanchipuram, Chennai</p>
              <p className='office__info'>phone: +919629175429</p>
              <p className='office__info'>Email:balamanikandan9232@gmail.com </p>
              <p className='office__info'>Office Time: 10am - 7pm </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className='mb-4'>
              <h5 className='footer__link__title'>NewsLetter</h5>
              <p className='section__description'>Subscribe our newsletter</p>
              <div className='newsletter'>
                <input type="email" placeholder='Email' />
                <span> <i className='ri-send-plane-line'></i></span>
              </div>
            </div>
          </Col>

          <Col>
            <div className='footer__bottom'>
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
                &copy; {year} Developed by Bala manikandan. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer