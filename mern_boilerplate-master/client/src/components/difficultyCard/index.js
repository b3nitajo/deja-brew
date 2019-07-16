import React from 'react';
import { Row, Col, CardPanel, Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import 'components/difficultyCard/diff.css'

function diffCard() {
    return (
        <React.Fragment>
            
               
                    <Container>
                        <Row>
                        <Col className="diffCard" m={3} s={12}>
                            <Link>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Easy</p>
                            </span>
                        </CardPanel>
                        </Link>
                        </Col>
                        
                        
                        <Col className="diffCard" m={3} s={12}>
                            <Link>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Easy</p>
                            </span>
                        </CardPanel>
                        </Link>
                        </Col>
                        
                        
                        <Col className="diffCard" m={3} s={12}>
                            <Link>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Easy</p>
                            </span>
                        </CardPanel>
                        </Link>
                        </Col>
                        </Row>
                        </Container>
                  
                
            
        </React.Fragment>

    )
}

export default diffCard;


