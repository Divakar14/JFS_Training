import react from 'react';
import './button.css';

class Button extends react.Component{
    constructor(props){
        super(props);
        this.state={
            a:8,
            b:2,
            c:9,
            d:4
        };
    }
    changeR=()=>{
        this.setState((prevState)=>({a:5}));
    }
    changeR1=()=>{
        this.setState((prevState)=>({b:5}));
    }
    changeR2=()=>{
        this.setState((prevState)=>({c:2}));
    }

    changeR3=()=>{
        this.setState((prevState)=>({d:6}));
    }

    render(){
        return (
            <center>
            <button class = "button" onClick={this.changeR}>click</button>
            <br></br>
            <br></br>
            <button class = "button" onClick={this.changeR1}>click</button>
            <br></br>
            <br></br>
            <button class = "button" onClick={this.changeR2}>click</button>
            <br></br>
            <br></br>
            <button class = "button" onClick={this.changeR3}>click</button>
            <br></br>
            <br></br>
            <h1>{this.state.a*this.state.b*this.state.c*this.state.d}</h1>
            </center>
        );

    }
}

export default Button;