import React from "react";
import Circle from "../Circle/Circle";
import Rect from "../Rect/Rect";
import Square from "../Square/Square";
import Triangle from "../Triangle/Triangle";
import Cube from "../Cube/Cube";
import Button from "../Button/Button";
import './container.css';

class Container extends React.Component{
    render(){
        return (
          <div class="container">
            <h1> Shapes </h1>
            <hr></hr>
            <Rect />
            <hr></hr>
            <Circle />  
            <hr></hr>
            <Triangle />
            <hr></hr>
            <Square />
            <hr></hr>
            <Cube />
            <hr></hr>
            <Button />
          </div>
        );
    }
}

export default Container;