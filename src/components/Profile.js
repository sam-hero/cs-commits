import { Card, Col, Container, Row, Image } from "react-bootstrap";

function Profile(){
    return (
        <div>
            <h1>Profile view</h1>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <h5>User Information</h5>   
                            <Image src="holder.js/171x180" roundedCircle />
                                
                            <Card.Body>
                                <p>Username:</p>
                                <p>Bio:</p>
                                <p>Created at:</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Card>
                            <h5> All About Him</h5>
                            <Card.Body>
                                <p>Company:</p>
                                <p>Location:</p>
                                <p>Followers:</p>
                                <p>Twitter:</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;