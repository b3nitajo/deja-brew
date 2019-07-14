import React from 'react';
import { Row, Col, CardPanel, Container } from 'react-materialize';

function diffCard(){
    return(
        <React.Fragment>
            <Container>
        <Row>
<Col m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
Easy
</span>
</CardPanel>
</Col>




<Col m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
Meduim
</span>
</CardPanel>
</Col>



<Col m={3} s={12}>
<CardPanel className="teal">
<span className="white-text">
Hard
</span>
</CardPanel>
</Col>
</Row>
</Container>
</React.Fragment>

    )
}

export default diffCard;


