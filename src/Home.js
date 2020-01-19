import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Home() {
    return (
        <Jumbotron className="jumbo-home d-flex min-vh-100 align-items-center" fluid>
            <Container className="text-center">
                <h1 style={{ color: 'white' }}>
                    Workout generator App</h1>
                <p>We are an automate AI platform for  humans.</p>
                <ButtonGroup aria-label="Basic example">
                    <Button href="/about" variant="primary">About</Button>
                    <Button href="generator" variant="primary">Generator</Button>
                </ButtonGroup>
            </Container>
        </Jumbotron>
    )
}

export default Home;