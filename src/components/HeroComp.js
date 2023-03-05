import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const HeroComp = () => {
    return (
         <div className="hero min-vh-100 w-100">
        <Container>
            <Row>
                <Col>
                    <h1 className="text-white text-center fs-1">Mari Bersantai Sejenak</h1>
                    <p className="text-white text-center text-white text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius neque nunc, at convallis dui commodo ac. Nulla tristique, lectus et dapibus tempus, massa urna aliquet diam, non dapibus metus lacus in mauris.</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default HeroComp;