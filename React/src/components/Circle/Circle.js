import React from "react";

class Circle extends React.Component{
    render(){
        var pi = 3.14;
        var r=10;
        var area=pi * r * r;
        return(
            <div>
                <center>
                    <h1>Circle</h1>
                    <h2>Circle Radius : {r}</h2>
                    <h4>Area of the Circle : {area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}

export default Circle;