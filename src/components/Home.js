import { Container, Row, Col, Card } from "react-bootstrap";

function Home(){
    return(
        <div>
            <h1>Home view</h1>
            <Container>
                <Row>
                    <Col> 
                        <Card>
                            <h5>
                                Information of Repo 
                                Name:
                            </h5>
                            <Card.Body>
                                <p>Description:</p>
                                <p>Created at:</p>
                                <p>Created By:</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="6">
                        <Card>
                            <h5>Total Commits</h5>
                        </Card>
                    </Col>

                    <Col xs="6">
                        <Card>
                            <h5> Graph of Commits</h5>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;