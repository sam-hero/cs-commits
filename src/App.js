import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Commits from './components/Commits';
import { Container, Nav, Row } from 'react-bootstrap';
import { Link,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Row class="justify-content">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          <Nav.Link as={Link} to={'profile'}>Profile</Nav.Link>
          <Nav.Link as={Link} to={'commits'}>Commits</Nav.Link>
        </Nav>
      </Row>
      <Container>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/profile" component={Profile}/>
        <Route exact={true} path="/Commits" component={Commits}/>
      </Container>
    </div>
  );
}

export default App;
