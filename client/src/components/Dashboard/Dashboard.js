import React, { Component } from "react";
import { Card, Row, Col, Carousel } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "../Tabs"
import "components/Dashboard/Dash.css"
import Logo from "components/Guest"


// const logo = { background: "red" }
class Dashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  state= {
    method:[]
  }
  handleSaveRec = e => {
    // e.preventDefault();

    let saveRec = this.state.recipes.filter(recipe => recipe._id === e);
    saveRec = saveRec[0];
    let saved = saveRec.method
    console.log('ggg'+saved);
    this.setState({ savedMethod: saved });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Carousel
          options={{ fullWidth: true, indicators: true }}
          className="white-text center"
        >
          <div className="welcome1">
            <h1 className="">
              <strong>
                {user ? `Welcome, ${user.name}! Lets get to brewing.` : ""}
              </strong>
            </h1>
          </div>
          {/* <div className="amber">
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
          </div> */}
        </Carousel>
         {/* <Row>
          <Col l={12}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Saved Recipes"
              handleSaveRec={this.handleSaveRec}
            >
              Black Coffee.
            </Card>
          </Col> */}
          {/* <Col l={6}>
            <Card
              className="blue-grey darken-1"
              textClassName="white-text"
              title="Add Recipe"
            >
              Mocha.
            </Card>
          </Col> */}
        {/* </Row>  */}
        <Tabs />
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment >
        
        <Logo />
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
