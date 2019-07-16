import React from 'react';
import Navbar from '../components/Navbar';

import DiffCard from '../components/difficultyCard';
import { Col, Row, Container } from 'react-materialize';

class Welcome extends React.Component {
    state = {
        recipes: []
        
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                <h1>Welcome. Let's get to brewing.</h1>
                <h5>Select what level barista you are.</h5>
                </Container>
                <DiffCard></DiffCard>
                

            </React.Fragment>



        )
    }
}



export default Welcome;




