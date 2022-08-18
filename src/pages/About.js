import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from "../components/helmet/Helmet"
import { Container, Row, Col } from "reactstrap"
import AboutSection from "../components/UI/AboutSection"
import DriverSection from '../components/UI/DriverSection'
import driveImg from "../assets/all-images/drive.jpg"
import OurMembers from '../components/UI/OurMembers'
import "./about.css"
const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass='aboutPage' />

      <section className='about__page__section'>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className='about__page__img'>
                <img src={driveImg} alt='' className="w-100 rounded-3" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className='about__page__content'>
                <h2 className='section__title'> We Are Committed To Provide Safe Ride Solutions</h2>
                <p className='section__description'>
                  Our policy will cover you against damages, theft and also damages to third-party property/life
                </p>

                <p className='section__description'>
                  Your safety is our priority. Be rest assured that Rent plus car on rent are fully sanitized before they are handed over to the customers.
                </p>
              </div>
              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'><i class="ri-phone-line"></i></span>

                <div>
                  <h6 className='section__subtitle' > Need Any Help?</h6>
                  <h4>+91 9629175428</h4>
                </div>

              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <DriverSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center'>
              <h6 className='section__subtitle'>Experts</h6>
              <h2 className='section__title'>Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>


    </Helmet>

  )
}

export default About