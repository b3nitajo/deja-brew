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
  title="Recipe"
  actions={[<a />,<a />]}
>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus varius odio vel diam aliquet, a eleifend lacus ullamcorper.
Suspendisse a lectus tincidunt neque condimentum ultricies.
Aenean scelerisque urna non turpis consequat molestie eget eget leo.
Mauris rutrum tellus quis tellus lobortis sodales.
Duis sed ipsum rhoncus arcu volutpat interdum id quis lorem.
Vestibulum congue enim fermentum nibh consequat, ut interdum erat rutrum.
Nam faucibus ligula a sapien posuere mollis.
</Card>
</Col>
</Row>
</React.Fragment>
)
}

export default card;