import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import DiffCard from '../components/difficultyCard';

class Welcome extends React.Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1>Welcome. Let's get to brewing.</h1>
                <Link>
                    <DiffCard />
                </Link>
                
            </React.Fragment>



        )
    }
}



export default Welcome;




