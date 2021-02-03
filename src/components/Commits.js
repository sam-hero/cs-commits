import {Row, Col , ListGroup , Card} from 'react-bootstrap'
import Axios from 'axios';
import {useState, useEffect, useLayoutEffect} from 'react';


function Commits(){

    const [commits,setCommits] = useState([]);
    const [selectCommit,setCommit] = useState(null);
    const [firstTime,setFirstTime] = useState(true);
    useEffect( () => {
        if(firstTime){
            setFirstTime(false);
        }else{
            return
        }
    },[firstTime]);

    useLayoutEffect( () => {
        getData();
    },[]);

    function getData(){
        if(firstTime){
            Axios.get('https://api.github.com/repos/sam-hero/cs-commits/commits').then( (response) => {
                setCommits(response.data);
            });
        }
    }

    function alertClicked( item ) {
        setCommit( item );
      }

    const listItems = commits.map((commit) =>
        <ListGroup.Item key={commit.sha}
            action onClick={ () => alertClicked(commit)}
        >
            <strong>
                {commit.commit.message.substr(0, 50)} ...
            </strong>
            <p>{commit.commit.author.date}</p>
        </ListGroup.Item>
    );

    return(
        <div>
            <h1>Profile View</h1>
            <Row>
                <Col>
                    <h6>Commits list ({commits.length}) </h6>
                    <ListGroup>
                        {listItems}
                    </ListGroup>                    
                </Col>
                <Col>
                    <h6>Commit Information</h6>
                    <Card>
                        <Card.Body>
                            {
                                selectCommit ?
                                <div>
                                        <p>
                                            Author: {selectCommit.commit.author.name}
                                        </p>
                                        <p>
                                            email: {selectCommit.commit.author.email}
                                        </p>
                                        <p>
                                            Date: {selectCommit.commit.author.date}
                                        </p>
                                        <p>Message</p>
                                        <span >
                                            {selectCommit.commit.message}
                                        </span>
                                    </div>    
                                :
                                <h6>Select a Commit</h6>   
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );

}

export default Commits;