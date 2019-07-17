import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';


function card(){
return (
<React.Fragment>
<Row>
    <Col m={6} s={12}>
    <Card
        horizontal
        header={
        <CardTitle image="https://materializecss.com/images/sample-1.jpg" />
        }
        actions={[
        <a href="https://materializecss.com/images/sample-1.jpg" key="1">
            This is a link
        </a>
            ]}
    >
        Here is the standard card with a horizontal image.
  </Card>
</Col>
</Row>
</React.Fragment>
)
}

export default card;