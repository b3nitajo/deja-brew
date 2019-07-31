import React from 'react';
import { Row, Col, Card } from 'react-materialize';


function searchCard(props){
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
    
    {props.instructions.map((intruction, index) => <li>{intruction['step' + (index + 1)]}</li>)}
</ul>
</Card>
</Col>
</Row>
</React.Fragment>
)
}

export default searchCard;