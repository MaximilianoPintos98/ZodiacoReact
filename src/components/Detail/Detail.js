import React from 'react'
import { Card, Row, Container, Col } from 'react-bootstrap'

export const Detail = (props) => {
    const parametroId = props.match.params.id;

    const [signo, setSigno] = React.useState({})

    React.useEffect(() => {
        const obtenerDatos = async (parametroId) => {
            const data = await fetch('/test/tb/zodiaco.json')
            const signoJson = await data.json()
            setSigno(signoJson.find((item) => {
                return item.id.toString() === parametroId
            }))
        }
        obtenerDatos(parametroId)
    }, [parametroId])


    return (
        <Container>
            <Card className='mb-3 w-50'>
                <Row noGutters>
                    <Col md={4}>
                        <img src={signo.imagen} alt={signo.signo} />
                        <Card.Title>Signo</Card.Title>
                        <Card.Text>{signo.signo}</Card.Text>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Card.Title>Elemento:  </Card.Title>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Card.Text>{signo.elemento}</Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Card.Title>Simbolo: </Card.Title>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Card.Text>{signo.simbolo}</Card.Text>
                                </Col>
                            </Row>
                            <Row className='mb-5'>
                                <Col md={4}>
                                    <Card.Title>Meses: </Card.Title>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Card.Text>{signo.meses}</Card.Text>
                                </Col>
                            </Row>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text >{signo.descripcion}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}
