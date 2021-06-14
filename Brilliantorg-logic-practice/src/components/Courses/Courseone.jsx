import react from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import card from '../../assets/card.png';
import './styles.css';

const Courseone = () => {
  return(
    <Container className="bg">
      <br/>
      <br/>
      <div>
          <h4><span className="alert-primary">2</span> The Rational Detective </h4>
          <p className="text-secondary">Eliminate the impossible and uncover the truth!</p>
      </div>
      <Row sm={3} className="wrapper">
        {Array.from({ length: 5 }).map((_, idx) => (
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

export default Courseone;
