import React from 'react';
import Navbar from '../components/Navbar';
import DiffCard from '../components/difficultyCard';
import HardCard from '../components/HardCard';
import MedCard from '../components/MedCard';
import { Col, Row, Container } from 'react-materialize';
import Card from '../components/card';

const data = [

    {
        name: 'name 1',
        milk: '3',
        coffee: '4',
        skillLevel: 'easy'
    },
    {
        name: 'name 2',
        milk: '3',
        coffee: '4',
        skillLevel: 'easy'
    },
    {
        name: 'name 3',
        milk: '3',
        coffee: '4',
        skillLevel: 'medium'
    },
    {
        name: 'name 4',
        milk: '3',
        coffee: '4',
        skillLevel: 'hard'
    },
    {
        name: 'name 4',
        milk: '3',
        coffee: '4',
        skillLevel: 'hard'
    },
    {
        name: 'name 4',
        milk: '3',
        coffee: '4',
        skillLevel: 'hard'
    }
]

class Welcome extends React.Component {

    state = {
        skillLevel: '',
        data,
        showSkillPage: true,



    }

    handleSkillChange = (skillLevel) => {
        if (skillLevel === 'easy') {
            this.setState({
                skillLevel: 'easy'
            })
        } else if (skillLevel === 'medium') {
            this.setState({
                skillLevel: 'medium'
            })
        } else if (skillLevel === 'hard') {
            this.setState({
                skillLevel: 'hard'
            })
        }
    }

    showSkillPage = () => {
        this.resetPages();
        this.setState({
            showSkillPage: true,
        })
    }


    resetPages = () => {
        this.setState({

            showSkillPage: false,
        })
    }


    render() {
        const filterdArray = this.state.data.filter(each => each.skillLevel === this.state.skillLevel)
        return (
            <React.Fragment>
                <Navbar />





                <Container>
                    <h1>Welcome. Let's get to brewing.</h1>
                    <h5>Select what level barista you are.</h5>
                </Container>
                <Row>

                    {this.state.showSkillPage === true &&
                        <>
                            <button className='btn' onClick={() => this.handleSkillChange('easy')}>easy</button>
                            <button className='btn' onClick={() => this.handleSkillChange('medium')}>medium</button>
                            <button className='btn' onClick={() => this.handleSkillChange('hard')}>hard</button>
                            {filterdArray.map(each => {
                                return <Card key={each.name}
                                    name={each.name}
                                    coffee={each.coffee}
                                    milk={each.milk}
                                    >

                                    {each.name}

                                </Card>
                            })}
                        </>
                    }

                </Row>


            </React.Fragment>



        )
    }
}



export default Welcome;




