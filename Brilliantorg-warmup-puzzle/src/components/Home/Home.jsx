import react from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import { AiOutlineLeft } from "react-icons/ai";

import One from '../Questions/One';
import './styles.css';

const Home = () => {
  return(
    <>
      <Row className="home">
        <Col xs={12} sm={2} className="sidebar">
            <div className="side">
              <p className="text-secondary"><AiOutlineLeft />Back</p>
              <p className="logic">Logic</p>
            </div>
        </Col>
        <Col xs={12} sm={7} className="main">
              <br />
              <br/>
              <One />
        </Col>
        <Col xs={12} sm={3} className="tab text-center">
          <p className="text-secondary">Lesson 1</p>
          <h5>Warm Up Puzzles</h5>
        </Col>
      </Row>
    </>
  )
}

export default Home;
