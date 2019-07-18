import React from 'react';
import { Row, Col, Card } from 'react-materialize';


function card(props){
return (
<React.Fragment>
<Row>
<Col m={6} s={12}>
<Card
  className="blue-grey darken-1"
  textClassName="white-text"
  title={props.name}
  actions={[<a />,<a />]}
>
<ul>
    <li>{props.coffee}</li>
    <li>{props.milk}</li>
</ul>
</Card>
</Col>
</Row>
</React.Fragment>
)
}

export default card;