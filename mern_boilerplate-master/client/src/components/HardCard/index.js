import React from 'react';
import { Row, Col, CardPanel, Container } from 'react-materialize';

import 'components/HardCard/hard.css'

function HardCard() {
    return (
        
            <Container>
                
                    <Col className="diffCard" m={4} s={12}>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Hard</p>
                            </span>
                        </CardPanel>
                    </Col>
                
            </Container>
       
    )
}

export default HardCard;