import React, { Component } from "react";
import { Parallax } from "react-materialize";
//import "components/YelpSerach/Parallax.css";

const image = {src=}
class ParallaxCard extends Component{
    render(){
        return (
            <div>
                <Parallax image={<img/>} />
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">Parallax</h2>
                                <p className="grey-text text-darken-3 lighten-3">
                                    Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
                                </p>
                        </div>
                    </div>
                <Parallax />
            </div>
        )
    }
}

export default ParallaxCard;