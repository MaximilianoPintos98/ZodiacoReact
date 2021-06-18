import React from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'

export const Detail = (props) => {
    const parametroId = props.match.params.id;

    debugger
    // const signoSeleccionado = props.signos.filter(props => props.id === parametroId);
    // console.log(signoSeleccionado)
    return (
        <Container>
            <Card className='mb-3 w-50'>
                <Row noGutters>
                    <Col md={4}>
                        <img src={props.imagen} alt={props.signo} />
                        <Card.Title>Signo</Card.Title>
                        <Card.Text>{props.signo}</Card.Text>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Card.Title>Elemento:  </Card.Title>
                                </Col>
                                <Col md={{span: 4, offset: 4}}>
                                    <Card.Text>{props.elemento}</Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Card.Title>Simbolo: </Card.Title>
                                </Col>
                                <Col md={{span: 4, offset: 4}}>
                                    <Card.Text>{props.simbolo}</Card.Text>
                                </Col>
                            </Row>
                            <Row className='mb-5'>
                                <Col md={4}>
                                    <Card.Title>Meses: </Card.Title>
                                </Col>
                                <Col md={{span: 4, offset: 4}}>
                                    <Card.Text>{props.meses}</Card.Text>
                                </Col>
                            </Row>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text >{props.descripcion}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}
