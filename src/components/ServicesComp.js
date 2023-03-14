import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius neque nunc, at convallis dui commodo ac. Nulla tristique, lectus et dapibus tempus, massa urna aliquet diam, non dapibus metus lacus in mauris.";

const ServicesComp = () => {
    return <div className="services h-100 d-felx align-items-center">
        <Container>
            <Row className="mb-5">
                <Col>
                    <h1 className="text-center fw-bold">Services</h1>
                    <p className="text-center">{lipsum}</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
                <Col className="text-center py-5 px3">
                    <i class="fa-solid fa-coins fs-2 mb-4" />
                    <h5 className="fw-bold">Harga Bagusss</h5>
                    <p>{lipsum}</p>
                </Col>
                <Col className="text-center py-5 px3">
                    <i class="fa-solid fa-user fs-2 mb-4" />
                    <h5 className="fw-bold">Are You Alone</h5>
                    <p>{lipsum}</p>
                </Col>
                <Col className="text-center py-5 px3">
                    <i class="fa-solid fa-money-bill-wave fs-2 mb-4"></i>
                    <h5 className="fw-bold">It's About Free</h5>
                    <p>{lipsum}</p>
                </Col>
            </Row>
        </Container>
    </div>
};

export default ServicesComp;