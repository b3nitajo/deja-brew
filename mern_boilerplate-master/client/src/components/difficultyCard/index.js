import React from 'react';
import { Row, Col, CardPanel, span } from 'react-materialize';

function diffCard(){
    return(
        <React.Fragment>
        <Row>
<Col m={6} s={12}>
<CardPanel className="teal">
<span className="white-text">
Easy
</span>
</CardPanel>
</Col>
</Row>


<Row>
<Col m={6} s={12}>
<CardPanel className="teal">
<span className="white-text">
Meduim
</span>
</CardPanel>
</Col>
</Row>

<Row>
<Col m={6} s={12}>
<CardPanel className="teal">
<span className="white-text">
Hard
</span>
</CardPanel>
</Col>
</Row>
</React.Fragment>
    )
}

export default diffCard;


