import react from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import Draggable from 'react-draggable'

import joseph from '../../assets/joseph.png';
import kevin from '../../assets/kevin.png';
import nicholas from '../../assets/nicholas.png';

import './styles.css';

const One = () => {
  return(
      <Container>
          <div className="ques-title">
              <p className="justify-content-center">
                  Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:
              </p>
          </div>
          <div className="ques-desc">
              <ul className="list">
                  <li className="list-items">Joseph is not the youngest.</li>
                  <li className="list-items">Kevin is the oldest.</li>
                  <li className="list-items">Nicholas is not the oldest.</li>
              </ul>
          </div>
          <div className="box">
            <p className="text-dark box-text">Drag the characters into the dotted boxes.</p>
            <div className="ans-box text-center">
                <Row>
                    <Col className="box1 text-secondary">box1</Col>
                    <Col className="box2 text-secondary">box2</Col>
                    <Col className="box3 text-secondary">box3</Col>
                </Row>
            </div>
            <div className="ans text-center">
                <Row>
                  <Draggable>
                    <Col>
                        <p className="name">Joseph</p>
                        <img src={joseph} className="joseph" alt="joseph" height="180" width="140"/>
                    </Col>
                  </Draggable>
                  <Draggable>
                    <Col>
                        <p className="name">Kevin</p>
                        <img src={kevin} className="kevin" alt="kevin" height="180" width="140" />
                    </Col>
                  </Draggable>
                  <Draggable>
                    <Col>
                        <p className="name">Nicholas</p>
                        <img src={nicholas} className="nicholas" alt="nicholas" height="180" width="140" />
                    </Col>
                  </Draggable>
                </Row>
            </div>
          </div>
          <div className="btn-box text-center">
              <Row>
                <Col xs={12} className="d-block">
                    <Button variant="secondary" size="lg" className="btn1">Show Explaination</Button>
                    <span className="btn2"><Button variant="dark" size="lg">Check Answer</Button></span>
                </Col>

              </Row>
          </div>
      </Container>
  )
}

export default One;
