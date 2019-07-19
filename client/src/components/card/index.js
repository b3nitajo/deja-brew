import React from 'react';
import { Row, Col, Card } from 'react-materialize';


function card(){
return (
<React.Fragment>
<Row>
<Col m={6} s={12}>
<Card
  className="blue-grey darken-1"
  textClassName="white-text"
  title="Card title"
  actions={[<a />,<a />]}
>
I am a very simple card.
</Card>
</Col>
</Row>
</React.Fragment>
)
}

export default card;