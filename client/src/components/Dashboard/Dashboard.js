import React, { Component } from "react";
import { Card, Row, Col, Carousel } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Welcome from "../../pages/Welcome";

class Dashboard extends Component {
  //   state = {
  //     isOpen: false
  //   };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  //   toggle = () => {
  //     this.setState({
  //       isOpen: !this.state.isOpen
  //     });
  //   };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Carousel
          options={{ fullWidth: true, indicators: true }}
          className="white-text center"
        >
          <div className="brown">
            <h2>First Panel</h2>
            <h1 className="">
              <strong>
                {user ? `Welcome, ${user.name}! Lets get to brewing.` : ""}
              </strong>
            </h1>
          </div>
          <div className="amber">
            <h2>Second Panel</h2>
            <p>This is your second panel</p>
          </div>
          <div className="green">
            <h2>Third Panel</h2>
            <p>This is your third panel</p>
          </div>
          <div className="blue">
            <h2>Fourth Panel</h2>
            <p>This is your fourth panel</p>
          </div>
        </Carousel>
        <Row>
          <Col l={6}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Saved Recipes"
            >
              Black Coffee.
            </Card>
          </Col>
          <Col l={6}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Add Recipe"
            >
              Mocha.
            </Card>
          </Col>
        </Row>
        <Welcome />
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <p>Please login!</p>
      </React.Fragment>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
