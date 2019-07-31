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
  title= {props.method}
  actions={[<a />,<a />]}
>
<ul>
    <li>{props.grind_size}</li>
    {props.instructions.map((intruction, index) => <li key={index}>{intruction['step' + (index + 1)]}</li>)}
</ul>
</Card>
</Col>
</Row>
</React.Fragment>
)
}

export default card;