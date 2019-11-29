import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Container } from 'reactstrap'

class Clients extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-apps mr-2"> </i>Clients</CardTitle>
                    </CardBody>

                    <CardBody className="border-top">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="bg-light p2 border">
                                        <h2>Hello from Clients</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Clients