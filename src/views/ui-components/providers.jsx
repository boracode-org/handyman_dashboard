import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Container, Button } from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Providers extends React.Component {
    render() {
        const columns = [
            {
                Header: 'Profile',
                accessor: 'profile'
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            },
            {
                Header: 'Address',
                accessor: 'address'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Actions',
                Cell: props => {
                    return  (
                        <Button>Delete</Button>
                    )
                }
            }
        ]
        
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-0"><i className = "mdi mdi-apps mr-2"> </i>Providers</CardTitle>
                    </CardBody>

                    <CardBody className="border-top">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="bg-light p2 border">
                                        <ReactTable columns={columns} noDataText="Please wait, Stuart is loading the data"/>
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

export default Providers
