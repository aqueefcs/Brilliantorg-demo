import react from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import card from '../../assets/card.png';
import './styles.css';

const Course = () => {
  return(
    <Container className="bg">
      <br/>
      <br/>
      <div>
          <h4><span className="one alert-primary">1</span> Introducion </h4>
          <p className="text-secondary">Put your logic to the test with these warmups!</p>
      </div>
      <Row sm={3} className="wrapper">
        {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
        <Card className="card-course" style={{width:"18rem"}}>
          <Card.Img variant="top" src={card} />
          <Card.Body>
            <Card.Title>Warmup Puzzle</Card.Title>
            <Card.Text className="text-secondary">
              Get started with some logic warmups.
            </Card.Text>
            <div className="bottom-line"></div>
          </Card.Body>
        </Card>
        </Col>
        ))}
        </Row>
    </Container>
  )
}

export default Course;
