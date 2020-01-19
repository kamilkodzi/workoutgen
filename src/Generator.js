import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as yup from 'yup';
import exercises from './exercises';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const schema = yup.object({
    time: yup.number()
})


class Generator extends React.Component {

    constructor() {
        super()
        this.state = {
            formSubmitted: false,
            currentWorkout: []
        }
    }

    handleSubmit(values) {
        const absArr = exercises.filter(a => a.type === "abs")
        const chestArr = exercises.filter(a => a.type === "chest")
        const cardioArr = exercises.filter(a => a.type === "cardio")
        const legsArr = exercises.filter(a => a.type === "legs")

        const absWorkout = absArr[Math.floor(Math.random() * absArr.length)]
        const chestWorkout = chestArr[Math.floor(Math.random() * chestArr.length)]
        const cardioWorkout = cardioArr[Math.floor(Math.random() * cardioArr.length)]
        const legsWorkout = legsArr[Math.floor(Math.random() * legsArr.length)]

        const rounds = (values.time / 5)

        const currentWorkout = {
            "rounds": rounds,
            "absName": absWorkout['name'],
            "chestName": chestWorkout['name'],
            "cardioName": cardioWorkout['name'],
            "legsName": legsWorkout['name'],
            "absReps": absWorkout['reps'],
            "chestReps": chestWorkout['reps'],
            "cardioReps": cardioWorkout['reps'],
            "legsReps": legsWorkout['reps'],
        }

        this.setState({
            formSubmitted: true,
            currentWorkout: currentWorkout
        })

        console.log(this.state)
    }



    render() {
        return (
            <Jumbotron className="jumbo-generator d-flex min-vh-100 align-items-center" fluid>
                <Container className="text-center">
                    <h1 style={{ color: 'white' }}>
                        Workout generator
                    </h1>
                    <Formik
                        validationSchema={schema}
                        onSubmit={this.handleSubmit.bind(this)}
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
                    {
                        this.state.formSubmitted ?
                            <div>
                                <br />
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                                        <Card className="card-workout">
                                            <Card.Header>{this.state.currentWorkout.rounds} rounds of:</Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{this.state.currentWorkout.absReps} {this.state.currentWorkout.absName} </ListGroup.Item>
                                                <ListGroup.Item>{this.state.currentWorkout.chestReps} {this.state.currentWorkout.chestName} </ListGroup.Item>
                                                <ListGroup.Item>{this.state.currentWorkout.legsReps} {this.state.currentWorkout.legsName} </ListGroup.Item>
                                                <ListGroup.Item>{this.state.currentWorkout.cardioReps} {this.state.currentWorkout.cardioName} </ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                </Row>
                            </div> :
                            null
                    }
                </Container>
            </Jumbotron>
        )
    }

}

export default Generator;