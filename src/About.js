import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <Jumbotron className="jumbo-about d-flex min-vh-100 align-items-center" style={{ fontFamily: "Lato" }} fluid>
            <Container className="text-center">
          
                <h1 style={{ fontSize: '6.2em', color: 'black' }}>
                    About Us</h1>
             
                <p>Group of people was created something different.</p>
     

                <Row>
                    <Col md={{offset:4, span:4}} lg={{offset:4, span:4}} xl={{offset:4, span:4}}>
                        <ListGroup>
                            <ListGroup.Item variant="dark">Love fitness</ListGroup.Item>
                            <ListGroup.Item variant="dark">Love workout</ListGroup.Item>
                            <ListGroup.Item variant="dark">Love progress</ListGroup.Item>
                            <ListGroup.Item variant="dark">born to be fit!</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default About;