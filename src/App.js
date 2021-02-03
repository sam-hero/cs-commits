import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Container, Nav } from 'react-bootstrap';
import { Link,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>sam-hero</h1>
      <Nav className="mr-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'profile'}>Profile</Nav.Link>
              <Nav.Link as={Link} to={'commits'}>Commits</Nav.Link>
          </Nav>
      <Container>
        <Route exact={true} path="/" component={Home}/>
      </Container>
    </div>
  );
}

export default App;
