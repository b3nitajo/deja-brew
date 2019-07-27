// import React from 'react';
import React, { Component } from 'react';
import DiffCard from '../components/difficultyCard';
import HardCard from '../components/HardCard';
import MedCard from '../components/MedCard';
import { Row, Container } from 'react-materialize';
import Card from '../components/card';
import Axios from 'axios';

// const data = [

//     {
//         name: 'name 1',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'easy'
//     },
//     {
//         name: 'name 2',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'easy'
//     },
//     {
//         name: 'name 3',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'medium'
//     },
//     {
//         name: 'name 4',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'hard'
//     },
//     {
//         name: 'name 5',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'hard'
//     },
//     {
//         name: 'name 6',
//         milk: '3',
//         coffee: '4',
//         skillLevel: 'hard'
//     }
// ]

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
            // .then(res => console.log(res))

            .catch(err => console.log(err));
    };


        // handleSkillChange = (skillLevel) => {
        //     if (skillLevel === 'easy') {
        //         this.setState({
        //             skillLevel: 'easy'
        //         })

        //     } else if (skillLevel === 'medium') {
        //         this.setState({
        //             skillLevel: 'medium'
        //         })

        //     } else if (skillLevel === 'hard') {
        //         this.setState({
        //             skillLevel: 'hard'
        //         })

        //     }
        //     console.log(data);
        //     console.log(this.state.skillLevel)
        // }

        // showSkillPage = () => {
        //     this.resetPages();
        //     this.setState({
        //         showSkillPage: true,
        //     })
        // }


        // resetPages = () => {
        //     this.setState({
        //         skillLevel: '',

        //     })
        // }

        


        render() {
            // const filterdArray = this.state.data.filter(each => each.skillLevel === this.state.skillLevel)
            return (
                <>

                <Container>
                    <h1 style={ h1Styles }>Welcome. Lets Start Brewing.</h1>
                    <h5 style={ h1Styles }>How difficult do you want the recipes to be?</h5>
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
