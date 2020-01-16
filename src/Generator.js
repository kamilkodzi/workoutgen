import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Generator() {
    return (
        <Jumbotron className="jumbo-generator d-flex min-vh-100 align-items-center" style={{ fontFamily: "Lato" }} fluid>
            <Container className="text-center">
                <h1 style={{ color: 'white' }}>
                    Workout generator</h1>
            </Container>
        </Jumbotron>
    )
}

export default Generator;