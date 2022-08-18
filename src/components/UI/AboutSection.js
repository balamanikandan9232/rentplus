import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from "../../assets/all-images/cars-img/innova.png"
import "./aboutsection.css"

const AboutSection = ({ aboutClass }) => {
    return (
        <section className='about__section' style={aboutClass === "aboutPage" ? { marginTop: "opx" } : { marginTop: "280px" }}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className='about__section__content'>
                            <h4 className='section__subtitle'>About Us</h4>
                            <h2 className='section__title'>Welcome To  Rent Plus</h2>
                            <p className='section__description'>
                                <h3> Grab your car at <b> Affordable Price %</b> and More benefits in Monthly subscription</h3>
                            </p>
                            <div className='about__section__item d-flex align-items-center'>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i>Easy & Quick Booking</p>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i>Clean & Well-Maintained Fleet</p>
                            </div>
                            <div className='about__section__item d-flex align-items-center'>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i> Limited Liability
                                </p>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i> Privacy & Freedom
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='about__img'>
                            <img src={aboutImg} alt='' className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection