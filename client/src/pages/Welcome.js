import React, { Component } from 'react';
import DiffCard from '../components/difficultyCard';
import HardCard from '../components/HardCard';
import MedCard from '../components/MedCard';
import { Col, Row, Container } from 'react-materialize';
import Card from '../components/card';
import Axios from 'axios';
import LoggedNav from '../components/LoggedinNavbar'




const h1Styles = {
    textAlign: 'center',


}



class Welcome extends Component {

    state = {
        recipes: [],
        name: '',
        instructions: ''
    };


    // componentDidMount() {
    //     this.handleRecipeRender();
    // }


    handleRecipeRender = (difficulty) => {

        Axios.get('http://localhost:3001/api/methods/methods/' + (difficulty || ''))
            .then(res => this.setState({ recipes: res.data, }))
            .catch(err => console.log(err));
    };


    render() {

        return (
            <>

                <LoggedNav></LoggedNav>

                <Container>
                    <br></br>
                    <div style={h1Styles}>
                        <img src="https://files.slack.com/files-pri/TD160CP16-FLBMU8W22/deja-brew.png"></img>
                    </div>

                    <h1 style={h1Styles}>Welcome. Lets Start Brewing.</h1>
                    <h5 style={h1Styles}>How difficult do you want the recipes to be?</h5>
                </Container>
                <Row>
                    <div onClick={() => this.handleRecipeRender('Easy')}>
                        <DiffCard />
                    </div>
                    <div onClick={() => this.handleRecipeRender('Medium')}>
                        <MedCard />
                    </div>
                    <div onClick={() => this.handleRecipeRender('Hard')}>
                        <HardCard />
                    </div>
                </Row>
                {
                    this.state.recipes.map((recipe, i) =>
                        <Card
                            key={i}
                            method={recipe.method}
                            instructions={recipe.instructions}
                        >
                            {recipe.method}
                        </Card>)
                }
            </>
        )
    }
}

export default Welcome;
