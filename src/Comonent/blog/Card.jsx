import React from "react";
import { Component } from "react";
import Card from "./CardUI";



class Cards extends Component {
    render(){
        return(
            <div className ="row" style={{justifyContent: "space-around"}}>
                <div className ="col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className ="col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className ="col-md-6 col-lg-4">
                    <Card />
                </div>
            </div>
        )
    }
}

export default Cards;