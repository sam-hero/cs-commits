import {Row, Col , ListGroup , Card} from 'react-bootstrap'

function Commits(){
    return(
        <div>
            <h1>Profile View</h1>
            <Row>
                <Col>
                        <h6>Commit List </h6>

                        <ListGroup>
                            <ListGroup.Item>
                                Commit
                            </ListGroup.Item>
                        </ListGroup>                    
                </Col>
                <Col>
                    <h6>Commit Information</h6>
                    <Card>
                        <Card.Body>
                            Info
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );

}

export default Commits;