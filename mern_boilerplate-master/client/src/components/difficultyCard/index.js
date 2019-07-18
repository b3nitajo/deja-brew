import React from 'react';
import { Row, Col, CardPanel, Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import 'components/difficultyCard/diff.css'

function diffCard() {
    return (
        <React.Fragment>
            <Container>
                
                    <Col className="diffCard" m={4} s={12}>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Easy</p>
                            </span>
                        </CardPanel>
                    </Col>
            
            </Container>
        </React.Fragment>

    )
}

export default diffCard;


