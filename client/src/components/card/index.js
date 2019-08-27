import React from "react";
import { Row, Col, Card } from "react-materialize";

{/* <button value={props.id} onClick={() => props.saveBook(props.id)} className="btn btn-success">
Save Recipes
</button> */}
function card(props) {
  return (
    <React.Fragment>
      <Row>
        <Col s={12} m={18}>
          <Card 
            className="blue-grey darken-1"
            textClassName="white-text"
            title={props.method}
            // actions={[<a />, <a />]}
            key={props.id}
          >
            <ul>
              <li>{props.grind_size}</li>
              {props.instructions.map((intruction, index) => (
                <li>{intruction["step" + (index + 1)]}</li>
              ))}
            </ul>
            <button  className="btn btn-success">
              Save Recipes
            </button>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default card;
