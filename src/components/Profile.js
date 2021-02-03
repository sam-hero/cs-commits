import { Card, Col, Container, Row, Image } from "react-bootstrap";
import {useState, useEffect, useLayoutEffect} from 'react';
import Axios from 'axios';
import '../App.css';


function Profile(){

    const [user,setUser] = useState(null);
    const [firstTime,setFirstTime] = useState(true);

    useEffect( () => {
        if(firstTime){
            console.log('Buscaré la info');
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
                    <Col>
                        <Card>
                            <h5> All About Him</h5>
                            <Card.Body>
                                <p>Company: {user.company}</p>
                                <p>Location: {user.location}</p>
                                <p>Followers: {user.followers}</p>
                                <p>Twitter: {user.twitter_username}</p>
                            </Card.Body>
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