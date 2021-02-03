import { Card, Col, Container, Row, Image } from "react-bootstrap";
import {useState, useEffect, useLayoutEffect} from 'react';
import Axios from 'axios';
import '../App.css';

function Profile(){

    const [user,setUser] = useState(null);
    const [commits,setCommits] = useState(null);
    const [firstTime,setFirstTime] = useState(true);

    useEffect( () => {
        if(firstTime){
            setFirstTime(false);
        }
        return() => {
            console.log('Salí de pantalla');
        }
    },[firstTime]);

    useLayoutEffect( () => {
        getData();
    });

    function getData(){
        if(firstTime){
            Axios.get('https://api.github.com/users/sam-hero').then( (response) => {
                setUser(response.data);
            });
            Axios.get('https://api.github.com/repos/sam-hero/cs-commits/stats/commit_activity').then( (response) => {
                setCommits(response.data[51]);//lastWeek
            });
        }
    }
    return (
        <div>
            <h1>Profile view</h1>
            { user ? 
                <Container>
                <Row>
                    <Col>
                        <Card>
                            <h5>User Information</h5>   
                                
                            <Card.Body>
                                <Image className="img-thumbnail user-logo" src={user.avatar_url} roundedCircle />
                                <p>name: {user.name}</p>
                                <p>Username: {user.login}</p>
                                <p>Bio: { user.bio }</p>
                                <p>Created at: {user.created_at}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="6">
                        <Card>
                            <h5> All About Him</h5>
                            <Card.Body>
                                <p>Company: {user.company}</p>
                                <p>Location: {user.location}</p>
                                <p>Followers: {user.followers}</p>
                                <p>Twitter: {user.twitter_username}</p>
                                <p>Website: {user.blog}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card>
                            <h5> Commits this week </h5>
                             { commits ? 
                                <h2>
                                    {commits.total}
                                </h2>
                            : 0}
                        </Card>
                    </Col>
                </Row>
            </Container>
            : 
            <span> Loading...</span> }
        </div>
    );
}

export default Profile;