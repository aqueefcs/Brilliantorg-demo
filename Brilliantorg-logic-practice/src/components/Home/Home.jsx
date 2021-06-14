import react from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import { AiOutlineLeft } from "react-icons/ai";
import logic from '../../assets/logic.png';
import Course from '../Courses/Course'
import Courseone from '../Courses/Courseone'
import './styles.css';

const Home = () => {
	return (
			<Container>

					<Row className="box">
					    <Col xs={12} md={6}>
										<p><a href="#" className="text-1 text-secondary" ><AiOutlineLeft /> Back to all course</a></p>
										<div className="mt-4">
												<h1 className="text-dark h1-responsive">Logic</h1>
												<h5 className="h5-responsive pt-2">Stretch your analytic muscles with knights, knaves, logic gates, and more!</h5>
										</div>
										<div>
												<p className="text-2 text-secondary">
													The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
												</p>

												<p className="text-2 text-secondary">
													You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges! <span><a href="#" className="text-secondary">Read more</a></span>
												</p>
												<a href="#" className="text-3 text-secondary">
													View prerequisites and next steps
												</a>
										</div>
							</Col>
					    <Col xs={12} md={6} className="container">
								<Card className="card">
									<Card.Img variant="top" className="img img-fluid text-center" fluid thumbnail src={logic} />
									<Card.Body>
										<Row>
												<Col xs={12} sm={6}>
														<h5 className="text-dark text-center">37</h5>
														<p className="text-secondary text-center">Interactive quizzes</p>
												</Col>
												<Col xs={12} sm={6}>
													<h5 className="text-dark text-center">256+</h5>
													<p className="text-secondary text-center">Concepts and exercises</p>
												</Col>
										</Row>
										<div className="d-grid">
										<Button variant="dark" size="lg">Start Course</Button>
										</div>
									</Card.Body>
									</Card>
							</Col>
				  </Row>

					<Course />
					<Courseone />
			</Container>
		)
}

export default Home;
