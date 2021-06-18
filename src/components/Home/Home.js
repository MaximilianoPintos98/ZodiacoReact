import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'


export const Home = () => {

    const [signos, setSignos] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('/test/tb/zodiaco.json')
        const signosJson = await data.json()

        setSignos(signosJson)
    }

    return (
        <Container className='pt-5'>
            <Row xs={1} md={4} className='g-4'>
                {
                    signos.map(s => (
                        <Col>
                            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Body>
                                    <Container>
                                        <Card.Img variant='top' src={s.imagen}/>
                                        <Card.Title  className='text-center'>{s.signo}</Card.Title>
                                        <Button variant='outline-danger' href={`detail/${s.id}`} >Ver Detalle</Button>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
