import React from "react";

class Square extends React.Component{
    render(){
        var a = 15;
        var area = a * a;
        return(
            <div>
                <center>
                    <h1>Square</h1>
                    <h2>Square Sides : {a}</h2>
                    <h4>Area of the Square : {area}</h4>
                </center>
                <br></br>
            </div>
        );
    }
}

export default Square;