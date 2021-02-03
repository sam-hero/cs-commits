import { Container, Row, Col, Card } from "react-bootstrap";
import {useState, useEffect, useLayoutEffect} from 'react';
import Axios from 'axios';

function Home(){

    const [repo,setRepo] = useState(null);
    const [firstTime,setFirstTime] = useState(true);

    useEffect( () => {
        if(firstTime){
            setFirstTime(false);
        }
        return() => {
            return 
        }
    },[firstTime]);

    useLayoutEffect( () => {
        getData();
    });

    function getData(){
        if(firstTime){
            Axios.get('https://api.github.com/users/sam-hero/repos').then( (response) => {
                setRepo(response.data[0]);
            });
        }
    }

    return(
        <div>
            <h1>Home view</h1>
            { repo ? 
                <Container>
                <Row>
                    <Col> 
                        <Card>
                            <h5>
                                Information of Repo 
                            </h5>
                            <h3>
                               {repo.name}
                            </h3>
                            <p>{repo.html_url}</p>
                            <Card.Body>
                                <p>Description: {repo.description}</p>
                                <p>Created By: { repo.owner.login } </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="6">
                        <Card className="cards">
                            <h5>Language</h5>
                            {repo.language}
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card className="cards">
                            <h5>Created</h5>
                            {repo.created_at}
                        </Card>
                    </Col>
                    
                    <Col xs="6">
                        <Card className="cards">
                            <h5>Last Push</h5>
                            {repo.pushed_at}
                        </Card>
                    </Col>

                    <Col xs="6">
                        <Card className="cards">
                            <h5>Size</h5>
                            {repo.size}
                        </Card>
                    </Col>
                </Row>
            </Container>
            :
                <h1>Loading...</h1>
            }
        </div>
    );
}

export default Home;