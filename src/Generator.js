import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
    time: yup.number()
})


function Generator() {
    return (
        <Jumbotron className="jumbo-generator d-flex min-vh-100 align-items-center" fluid>
            <Container className="text-center">
                <h1 style={{ color: 'white' }}>
                    Workout generator
                </h1>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        time: 15
                    }}
                >
                    {
                        (
                            {
                                handleSubmit,
                                handleChange,
                                values,
                            }
                        ) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={{ offset: 4, span: 4 }} lg={{ offset: 4, span: 4 }} xl={{ offset: 4, span: 4 }}>
                                            <Form.Group controlId="formGridState">
                                                <Form.Label>How long woud you like to workout</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="time"
                                                    value={values.time}
                                                    onChange={handleChange}
                                                >
                                                    <option>15</option>
                                                    <option>20</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                    <option>35</option>
                                                    <option>40</option>
                                                    <option>45</option>
                                                    <option>50</option>
                                                    <option>55</option>
                                                    <option>60</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button type='submit' variant="primary">Generate workout</Button>
                                        </Col>
                                    </Row>

                                </Form>
                            )}
                </Formik>
            </Container>
        </Jumbotron>
    )
}

export default Generator;