import React from 'react';
import { Row, Col, CardPanel, Container } from 'react-materialize';
import 'components/difficultyCard/diff.css'

function diffCard(){
    return(
        <React.Fragment>
            <Container>
        <Row>
<Col className="diffCard" m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
<p>Easy</p>
</span>
</CardPanel>
</Col>




<Col className="diffCard" m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
<p>Medium</p>
</span>
</CardPanel>
</Col>



<Col className="diffCard" m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
<p>Hard</p>
</span>
</CardPanel>
</Col>
</Row>
</Container>
</React.Fragment>

    )
}

export default diffCard;


