import React from 'react'
import "./driversection.css"
import { Container, Row, Col } from "reactstrap"
import driverImg from "../../assets/all-images/cars-img/toyota-offer-2.png"
const DriverSection = () => {
    return (
        <section className='become__driver'>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="become__driver__img">
                        <img src={driverImg} alt="" />
                    </Col>

                    <Col lg="6" md="6" sm="12">
                        <h2 className='section__title become__driver__title'>
                            Do You Want to Earn With Us? So Don't Be Late
                        </h2>
                        <button className='btn become__driver__btn mt-4'>
                            Become a Driver
                        </button>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default DriverSection