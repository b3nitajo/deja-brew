import React from 'react';
import { Col, CardPanel, Container } from 'react-materialize';

import 'components/MedCard/med.css'

function MedCard() {
    return (
        
            <Container>
                
                    <Col className="diffCard" m={4} s={12}>
                        <CardPanel className="teal">
                            <span className="white-text">
                                <p>Med</p>
                            </span>
                        </CardPanel>
                    </Col>
                
            </Container>
       

    )
}

export default MedCard;